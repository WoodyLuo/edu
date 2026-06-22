const DATA_URL = "../HighSchoolList.json";

const searchForm = document.querySelector("#searchForm");
const keywordInput = document.querySelector("#keyword");
const messageElement = document.querySelector("#message");
const resultElement = document.querySelector("#result");

let schoolData = [];

async function loadSchoolData() {
  try {
    const response = await fetch(DATA_URL);

    if (!response.ok) {
      throw new Error(`讀取資料失敗：HTTP ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("JSON 格式錯誤，最外層必須是陣列。");
    }

    schoolData = data;
  } catch (error) {
    messageElement.textContent = error.message;
    console.error(error);
  }
}

function searchSchools(keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return [];
  }

  return schoolData.filter((school) => {
    const schoolCode = String(
      school.school_code ?? ""
    ).toLowerCase();

    const schoolName = String(
      school.school_name ?? ""
    ).toLowerCase();

    return (
      schoolCode === normalizedKeyword ||
      schoolName.includes(normalizedKeyword)
    );
  });
}

function showResult(results) {
  if (results.length === 0) {
    messageElement.textContent = "查無符合條件的學校。";
    resultElement.textContent = "";
    return;
  }

  messageElement.textContent = `共找到 ${results.length} 筆資料。`;

  resultElement.textContent = JSON.stringify(
    {
      success: true,
      count: results.length,
      data: results
    },
    null,
    2
  );
}

function updateUrl(keyword) {
  const url = new URL(window.location.href);

  url.searchParams.delete("school_code");
  url.searchParams.delete("school_name");

  if (/^\d+$/.test(keyword)) {
    url.searchParams.set("school_code", keyword);
  } else {
    url.searchParams.set("school_name", keyword);
  }

  window.history.replaceState({}, "", url);
}

function getKeywordFromUrl() {
  const url = new URL(window.location.href);

  return (
    url.searchParams.get("school_code") ||
    url.searchParams.get("school_name") ||
    ""
  );
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = keywordInput.value.trim();

  updateUrl(keyword);

  const results = searchSchools(keyword);

  showResult(results);
});

async function initialize() {
  await loadSchoolData();

  const keyword = getKeywordFromUrl();

  if (keyword) {
    keywordInput.value = keyword;
    showResult(searchSchools(keyword));
  }
}

initialize();