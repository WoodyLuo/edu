const departmentState = {
  rawData: [],
  filteredData: [],
  sortKey: "",
  sortDir: "asc",
  selectedKey: "",
};

const departmentEls = {
  keywordInput: document.getElementById("departmentKeywordInput"),
  countInfo: document.getElementById("departmentCountInfo"),
  tableBody: document.getElementById("departmentTableBody"),
  copyMessage: document.getElementById("departmentCopyMessage"),
  copySelectedBtn: document.getElementById("copySelectedDepartmentBtn"),
  headerCells: document.querySelectorAll("thead th[data-dept-key]"),

  selectedEmpty: document.getElementById("selectedDepartmentEmpty"),
  selectedDetail: document.getElementById("selectedDepartmentDetail"),
  selectedGroupCode: document.getElementById("selectedGroupCode"),
  selectedGroupName: document.getElementById("selectedGroupName"),
  selectedDeptCode: document.getElementById("selectedDeptCode"),
  selectedDeptName: document.getElementById("selectedDeptName"),

  detailGroupCode: document.getElementById("detailGroupCode"),
  detailDeptCode: document.getElementById("detailDeptCode"),
  detailGroup: document.getElementById("detailGroup"),
  detailDepartment: document.getElementById("detailDepartment"),
};

async function loadDepartmentData() {
  try {
    const res = await fetch("./HighSchoolProgramGroups.json", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("無法讀取 HighSchoolProgramGroups.json");
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("JSON 格式錯誤，根節點必須是陣列");
    }

    departmentState.rawData = data;
    applyDepartmentFiltersAndRender();
  } catch (error) {
    console.error(error);
    departmentEls.tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-danger text-center py-4">
          資料載入失敗：${escapeDepartmentHtml(error.message)}
        </td>
      </tr>
    `;
    departmentEls.countInfo.value = "載入失敗";
  }
}

function applyDepartmentFiltersAndRender() {
  const keyword = (departmentEls.keywordInput?.value || "")
    .trim()
    .toLowerCase();

  let result = [...departmentState.rawData];

  if (keyword) {
    result = result.filter((item) => {
      const searchText = [
        item.group_code,
        item.group_name,
        item.dept_code,
        item.dept_name,
      ]
        .map((v) => (v ?? "").toString().toLowerCase())
        .join(" ");

      return searchText.includes(keyword);
    });
  }

  if (departmentState.sortKey) {
    result.sort((a, b) =>
      compareDepartmentValues(
        a[departmentState.sortKey],
        b[departmentState.sortKey],
        departmentState.sortDir,
      ),
    );
  }

  departmentState.filteredData = result;
  renderDepartmentTable(result);
  updateDepartmentCountInfo();
  updateDepartmentSortIndicators();
  syncDepartmentSelectedAfterRender();
}

function compareDepartmentValues(a, b, dir = "asc") {
  const valA = a ?? "";
  const valB = b ?? "";

  const isNumberA = typeof valA === "number" || (!isNaN(valA) && valA !== "");
  const isNumberB = typeof valB === "number" || (!isNaN(valB) && valB !== "");

  let result = 0;

  if (isNumberA && isNumberB) {
    result = Number(valA) - Number(valB);
  } else {
    result = String(valA).localeCompare(String(valB), "zh-Hant");
  }

  return dir === "asc" ? result : -result;
}

function renderDepartmentTable(data) {
  if (!data.length) {
    departmentEls.tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-4">查無資料</td>
      </tr>
    `;
    clearDepartmentSelection();
    return;
  }

  const rowsHtml = data
    .map((item, index) => {
      const selectedKey = makeDepartmentSelectedKey(item);
      const isSelected = selectedKey === departmentState.selectedKey;

      return `
        <tr
          class="department-row ${isSelected ? "is-selected" : ""}"
          data-index="${index}"
          data-selected-key="${escapeDepartmentAttr(selectedKey)}"
        >
          <td>${escapeDepartmentHtml(item.group_code ?? "")}</td>
          <td class="department-group-name">${escapeDepartmentHtml(item.group_name ?? "")}</td>
          <td>${escapeDepartmentHtml(item.dept_code ?? "")}</td>
          <td class="department-dept-name">${escapeDepartmentHtml(item.dept_name ?? "")}</td>
          <td>
            <button
              class="btn btn-sm btn-outline-primary copy-department-row-btn"
              data-index="${index}"
              type="button"
            >
              複製
            </button>
          </td>
        </tr>
      `;
    })
    .join("");

  departmentEls.tableBody.innerHTML = rowsHtml;

  document.querySelectorAll(".copy-department-row-btn").forEach((btn) => {
    btn.addEventListener("click", handleCopyDepartmentRow);
  });

  document.querySelectorAll(".department-row").forEach((row) => {
    row.addEventListener("click", handleSelectDepartmentRow);
  });
}

function updateDepartmentCountInfo() {
  departmentEls.countInfo.value = `共 ${departmentState.filteredData.length} 筆 / 全部 ${departmentState.rawData.length} 筆`;
}

function updateDepartmentSortIndicators() {
  departmentEls.headerCells.forEach((th) => {
    const key = th.dataset.deptKey;
    const indicator = th.querySelector(".sort-indicator");
    if (!indicator) return;

    if (key === departmentState.sortKey) {
      indicator.textContent = departmentState.sortDir === "asc" ? "▲" : "▼";
    } else {
      indicator.textContent = "";
    }
  });
}

function handleDepartmentSortClick(event) {
  const key = event.currentTarget.dataset.deptKey;
  if (!key) return;

  if (departmentState.sortKey === key) {
    departmentState.sortDir =
      departmentState.sortDir === "asc" ? "desc" : "asc";
  } else {
    departmentState.sortKey = key;
    departmentState.sortDir = "asc";
  }

  applyDepartmentFiltersAndRender();
}

function handleSelectDepartmentRow(event) {
  const index = Number(event.currentTarget.dataset.index);
  const item = departmentState.filteredData[index];
  if (!item) return;

  departmentState.selectedKey = makeDepartmentSelectedKey(item);
  renderSelectedDepartment(item);
  refreshDepartmentSelectedRow();
}

function refreshDepartmentSelectedRow() {
  document.querySelectorAll(".department-row").forEach((row) => {
    const key = row.dataset.selectedKey || "";
    row.classList.toggle("is-selected", key === departmentState.selectedKey);
  });
}

function syncDepartmentSelectedAfterRender() {
  if (!departmentState.selectedKey) return;

  const selectedItem = departmentState.filteredData.find(
    (item) => makeDepartmentSelectedKey(item) === departmentState.selectedKey,
  );

  if (selectedItem) {
    renderSelectedDepartment(selectedItem);
    refreshDepartmentSelectedRow();
  } else {
    clearDepartmentSelection();
  }
}

function clearDepartmentSelection() {
  departmentState.selectedKey = "";

  departmentEls.selectedEmpty.classList.remove("d-none");
  departmentEls.selectedDetail.classList.add("d-none");

  departmentEls.selectedGroupCode.textContent = "－";
  departmentEls.selectedGroupName.textContent = "－";
  departmentEls.selectedDeptCode.textContent = "－";
  departmentEls.selectedDeptName.textContent = "－";

  departmentEls.detailGroupCode.textContent = "－";
  departmentEls.detailDeptCode.textContent = "－";
  departmentEls.detailGroup.textContent = "－";
  departmentEls.detailDepartment.textContent = "－";
}

function renderSelectedDepartment(item) {
  departmentEls.selectedEmpty.classList.add("d-none");
  departmentEls.selectedDetail.classList.remove("d-none");

  departmentEls.selectedGroupCode.textContent = item.group_code ?? "－";
  departmentEls.selectedGroupName.textContent = item.group_name ?? "－";
  departmentEls.selectedDeptCode.textContent = item.dept_code ?? "－";
  departmentEls.selectedDeptName.textContent = item.dept_name ?? "－";

  departmentEls.detailGroupCode.textContent = item.group_code ?? "－";
  departmentEls.detailDeptCode.textContent = item.dept_code ?? "－";
  departmentEls.detailGroup.textContent = item.group_name ?? "－";
  departmentEls.detailDepartment.textContent = item.dept_name ?? "－";
}

async function handleCopyDepartmentRow(event) {
  event.stopPropagation();

  const index = Number(event.currentTarget.dataset.index);
  const item = departmentState.filteredData[index];
  if (!item) return;

  const text = formatDepartmentText(item);

  try {
    await navigator.clipboard.writeText(text);
    showDepartmentCopyMessage("單筆類群/科系資料已複製");
  } catch (err) {
    console.error(err);
    showDepartmentCopyMessage("複製失敗，請確認瀏覽器是否允許剪貼簿權限", true);
  }
}

async function handleCopySelectedDepartment() {
  if (!departmentState.selectedKey) {
    showDepartmentCopyMessage("尚未選取類群 / 科系", true);
    return;
  }

  const item = departmentState.rawData.find(
    (row) => makeDepartmentSelectedKey(row) === departmentState.selectedKey,
  );

  if (!item) {
    showDepartmentCopyMessage("找不到選取資料", true);
    return;
  }

  try {
    await navigator.clipboard.writeText(formatDepartmentText(item));
    showDepartmentCopyMessage("已複製選取類群 / 科系資料");
  } catch (err) {
    console.error(err);
    showDepartmentCopyMessage("複製失敗，請確認瀏覽器是否允許剪貼簿權限", true);
  }
}

function formatDepartmentText(item) {
  return [
    `group_code: ${item.group_code ?? ""}`,
    `group_name: ${item.group_name ?? ""}`,
    `dept_code: ${item.dept_code ?? ""}`,
    `dept_name: ${item.dept_name ?? ""}`,
  ].join("\n");
}

function showDepartmentCopyMessage(message, isError = false) {
  departmentEls.copyMessage.textContent = message;
  departmentEls.copyMessage.className = isError ? "copy-error" : "copy-success";

  clearTimeout(showDepartmentCopyMessage._timer);
  showDepartmentCopyMessage._timer = setTimeout(() => {
    departmentEls.copyMessage.textContent = "";
    departmentEls.copyMessage.className = "small-note";
  }, 2500);
}

function makeDepartmentSelectedKey(item) {
  return `${item.group_code ?? ""}__${item.dept_code ?? ""}`;
}

function escapeDepartmentHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeDepartmentAttr(value) {
  return escapeDepartmentHtml(value);
}

function bindDepartmentEvents() {
  departmentEls.keywordInput?.addEventListener(
    "input",
    applyDepartmentFiltersAndRender,
  );
  departmentEls.copySelectedBtn?.addEventListener(
    "click",
    handleCopySelectedDepartment,
  );

  departmentEls.headerCells.forEach((th) => {
    th.addEventListener("click", handleDepartmentSortClick);
  });

  document.addEventListener("school:selected", () => {
    clearDepartmentSelection();
  });

  document.addEventListener("school:cleared", () => {
    clearDepartmentSelection();
  });
}

bindDepartmentEvents();
loadDepartmentData();
