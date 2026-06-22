const SCHOOL_DATA_URL = "../HighSchoolList.json";
const DEPARTMENT_DATA_URL = "../HighSchoolProgramGroups.json";

const searchForm = document.querySelector("#searchForm");
const searchTypeElement = document.querySelector("#searchType");
const keywordInput = document.querySelector("#keyword");
const messageElement = document.querySelector("#message");
const resultElement = document.querySelector("#result");

let schoolData = [];
let departmentData = [];

/**
 * 統一產生查詢結果格式
 */
function createResult({
  success,
  message,
  query = {},
  schools = [],
  departments = []
}) {
  return {
    success,
    message,
    query,
    count: {
      schools: schools.length,
      departments: departments.length,
      total: schools.length + departments.length
    },
    data: {
      schools,
      departments
    }
  };
}

/**
 * 讀取單一 JSON 檔案
 */
async function loadJsonData(url, dataName) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `${dataName}讀取失敗：HTTP ${response.status}`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error(
      `${dataName}格式錯誤，JSON 最外層必須是陣列。`
    );
  }

  return data;
}

/**
 * 同時載入學校與科系資料
 */
async function loadAllData() {
  try {
    messageElement.textContent = "資料載入中……";

    const [schools, departments] = await Promise.all([
      loadJsonData(SCHOOL_DATA_URL, "學校資料"),
      loadJsonData(DEPARTMENT_DATA_URL, "科系資料")
    ]);

    schoolData = schools;
    departmentData = departments;

    messageElement.textContent =
      `資料載入完成：${schoolData.length} 所學校，` +
      `${departmentData.length} 筆科系資料。`;

    return true;
  } catch (error) {
    messageElement.textContent = error.message;
    resultElement.textContent = "";

    console.error(error);

    return false;
  }
}

/**
 * 將文字正規化，方便搜尋
 */
function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLocaleLowerCase("zh-TW");
}

/**
 * 搜尋學校
 *
 * school_code：完全符合
 * school_name：包含關鍵字
 */
function searchSchools({
  schoolCode = "",
  schoolName = ""
} = {}) {
  const normalizedCode = normalizeText(schoolCode);
  const normalizedName = normalizeText(schoolName);

  if (!normalizedCode && !normalizedName) {
    return [];
  }

  return schoolData.filter((school) => {
    const currentCode = normalizeText(school.school_code);
    const currentName = normalizeText(school.school_name);

    const codeMatched =
      !normalizedCode || currentCode === normalizedCode;

    const nameMatched =
      !normalizedName || currentName.includes(normalizedName);

    return codeMatched && nameMatched;
  });
}

/**
 * 搜尋科系
 *
 * dept_code：完全符合
 * dept_name：包含關鍵字
 */
function searchDepartments({
  deptCode = "",
  deptName = ""
} = {}) {
  const normalizedCode = normalizeText(deptCode);
  const normalizedName = normalizeText(deptName);

  if (!normalizedCode && !normalizedName) {
    return [];
  }

  return departmentData.filter((department) => {
    const currentCode = normalizeText(department.dept_code);
    const currentName = normalizeText(department.dept_name);

    const codeMatched =
      !normalizedCode || currentCode === normalizedCode;

    const nameMatched =
      !normalizedName || currentName.includes(normalizedName);

    return codeMatched && nameMatched;
  });
}

/**
 * 依照四種查詢參數進行搜尋
 */
function executeSearch(query) {
  const {
    school_code: schoolCode = "",
    school_name: schoolName = "",
    dept_code: deptCode = "",
    dept_name: deptName = ""
  } = query;

  const hasSchoolQuery =
    Boolean(schoolCode) || Boolean(schoolName);

  const hasDepartmentQuery =
    Boolean(deptCode) || Boolean(deptName);

  if (!hasSchoolQuery && !hasDepartmentQuery) {
    return createResult({
      success: false,
      message:
        "請提供 school_code、school_name、dept_code 或 dept_name。",
      query
    });
  }

  const schools = hasSchoolQuery
    ? searchSchools({
        schoolCode,
        schoolName
      })
    : [];

  const departments = hasDepartmentQuery
    ? searchDepartments({
        deptCode,
        deptName
      })
    : [];

  const total = schools.length + departments.length;

  if (total === 0) {
    return createResult({
      success: false,
      message: "查無符合條件的資料。",
      query,
      schools,
      departments
    });
  }

  return createResult({
    success: true,
    message: `共找到 ${total} 筆資料。`,
    query,
    schools,
    departments
  });
}

/**
 * 顯示 JSON 結果
 */
function showResult(result) {
  messageElement.textContent = result.message;

  resultElement.textContent = JSON.stringify(
    result,
    null,
    2
  );
}

/**
 * 清除所有查詢參數
 */
function clearSearchParams(url) {
  url.searchParams.delete("school_code");
  url.searchParams.delete("school_name");
  url.searchParams.delete("dept_code");
  url.searchParams.delete("dept_name");
}

/**
 * 根據表單內容更新網址
 */
function updateUrl(searchType, keyword) {
  const url = new URL(window.location.href);

  clearSearchParams(url);

  url.searchParams.set(searchType, keyword);

  window.history.replaceState({}, "", url);
}

/**
 * 從網址取得查詢參數
 */
function getQueryFromUrl() {
  const url = new URL(window.location.href);

  return {
    school_code:
      url.searchParams.get("school_code")?.trim() || "",

    school_name:
      url.searchParams.get("school_name")?.trim() || "",

    dept_code:
      url.searchParams.get("dept_code")?.trim() || "",

    dept_name:
      url.searchParams.get("dept_name")?.trim() || ""
  };
}

/**
 * 將網址參數帶回表單
 *
 * 若網址有多個參數，表單只顯示第一個，
 * 但實際搜尋仍會使用全部參數。
 */
function fillFormFromQuery(query) {
  const searchOrder = [
    "school_code",
    "school_name",
    "dept_code",
    "dept_name"
  ];

  const firstType = searchOrder.find(
    (type) => query[type]
  );

  if (!firstType) {
    return;
  }

  searchTypeElement.value = firstType;
  keywordInput.value = query[firstType];
}

/**
 * 表單送出
 */
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchType = searchTypeElement.value;
  const keyword = keywordInput.value.trim();

  if (!keyword) {
    showResult(
      createResult({
        success: false,
        message: "請輸入查詢關鍵字。"
      })
    );

    return;
  }

  updateUrl(searchType, keyword);

  const query = {
    school_code: "",
    school_name: "",
    dept_code: "",
    dept_name: "",
    [searchType]: keyword
  };

  const result = executeSearch(query);

  showResult(result);
});

/**
 * 初始化
 */
async function initialize() {
  const loaded = await loadAllData();

  if (!loaded) {
    return;
  }

  const query = getQueryFromUrl();

  const hasQuery = Object.values(query).some(Boolean);

  if (!hasQuery) {
    return;
  }

  fillFormFromQuery(query);

  const result = executeSearch(query);

  showResult(result);
}

initialize();