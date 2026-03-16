const state = {
  rawData: [],
  filteredData: [],
  sortKey: "",
  sortDir: "asc",
  selectedSchoolCode: "",
};

const els = {
  keywordInput: document.getElementById("keywordInput"),
  cityFilter: document.getElementById("cityFilter"),
  ownshipFilter: document.getElementById("ownshipFilter"),
  countInfo: document.getElementById("countInfo"),
  schoolTableBody: document.getElementById("schoolTableBody"),
  copyVisibleBtn: document.getElementById("copyVisibleBtn"),
  resetBtn: document.getElementById("resetBtn"),
  copyMessage: document.getElementById("copyMessage"),
  headerCells: document.querySelectorAll("thead th[data-key]"),

  copySelectedBtn: document.getElementById("copySelectedBtn"),
  selectedCopyMessage: document.getElementById("selectedCopyMessage"),
  selectedSchoolEmpty: document.getElementById("selectedSchoolEmpty"),
  selectedSchoolPanel: document.getElementById("selectedSchoolPanel"),
  selectedSchoolTitle: document.getElementById("selectedSchoolTitle"),

  detailSchoolCode: document.getElementById("detailSchoolCode"),
  detailSchoolName: document.getElementById("detailSchoolName"),
  detailCityName: document.getElementById("detailCityName"),
  detailCityId: document.getElementById("detailCityId"),
  detailSchoolOwnship: document.getElementById("detailSchoolOwnship"),
  detailGroupCode: document.getElementById("detailGroupCode"),
  detailDeptCode: document.getElementById("detailDeptCode"),
  detailGroup: document.getElementById("detailGroup"),
  detailDepartment: document.getElementById("detailDepartment"),
  detailAddress: document.getElementById("detailAddress"),
  detailPhone: document.getElementById("detailPhone"),
  detailWebsite: document.getElementById("detailWebsite"),
  detailRemark: document.getElementById("detailRemark"),
};

async function loadData() {
  try {
    const res = await fetch("./HighSchoolList.json", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("無法讀取 HighSchoolList.json");
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("JSON 格式錯誤，根節點必須是陣列");
    }

    state.rawData = data;
    initCityOptions(data);
    applyFiltersAndRender();
  } catch (error) {
    console.error(error);
    els.schoolTableBody.innerHTML = `
      <tr>
        <td colspan="10" class="text-danger text-center py-4">
          資料載入失敗：${escapeHtml(error.message)}
        </td>
      </tr>
    `;
    els.countInfo.value = "載入失敗";
  }
}

function initCityOptions(data) {
  const citySet = new Set();

  data.forEach((item) => {
    if (item.city_name) citySet.add(item.city_name);
  });

  const cities = Array.from(citySet).sort((a, b) =>
    a.localeCompare(b, "zh-Hant"),
  );

  els.cityFilter.innerHTML = `<option value="">全部縣市</option>`;
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    els.cityFilter.appendChild(option);
  });
}

function applyFiltersAndRender() {
  const keyword = els.keywordInput.value.trim().toLowerCase();
  const city = els.cityFilter.value;
  const ownship = els.ownshipFilter.value;

  let result = [...state.rawData];

  if (keyword) {
    result = result.filter((item) => {
      const searchText = [
        item.school_code,
        item.school_name,
        item.school_ownship,
        item.city_name,
        item.city_code,
        item.shcool_adress,
        item.school_phone,
        item.school_website,
        item.remark,
      ]
        .map((v) => (v ?? "").toString().toLowerCase())
        .join(" ");

      return searchText.includes(keyword);
    });
  }

  if (city) {
    result = result.filter((item) => item.city_name === city);
  }

  if (ownship) {
    result = result.filter((item) => item.school_ownship === ownship);
  }

  if (state.sortKey) {
    result.sort((a, b) =>
      compareValues(a[state.sortKey], b[state.sortKey], state.sortDir),
    );
  }

  state.filteredData = result;
  renderTable(result);
  updateCountInfo();
  updateSortIndicators();
  syncSelectedPanelAfterRender();
}

function compareValues(a, b, dir = "asc") {
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

function renderTable(data) {
  if (!data.length) {
    els.schoolTableBody.innerHTML = `
      <tr>
        <td colspan="10" class="text-center py-4">查無資料</td>
      </tr>
    `;
    clearSelectedPanelIfNotFound();
    return;
  }

  const rowsHtml = data
    .map((item, index) => {
      const website = item.school_website || "";
      const remark = item.remark ?? "";
      const ownshipBadgeClass =
        item.school_ownship === "公立" ? "bg-success" : "bg-warning text-dark";
      const isSelected = item.school_code === state.selectedSchoolCode;

      return `
        <tr
          class="school-row ${isSelected ? "is-selected" : ""}"
          data-index="${index}"
          data-school-code="${escapeAttr(item.school_code ?? "")}"
        >
          <td>${escapeHtml(item.school_code ?? "")}</td>
          <td class="school-name">${escapeHtml(item.school_name ?? "")}</td>
          <td>
            <span class="badge ${ownshipBadgeClass} badge-ownship">
              ${escapeHtml(item.school_ownship ?? "")}
            </span>
          </td>
          <td>${escapeHtml(item.city_name ?? "")}</td>
          <td>${escapeHtml(String(item.city_code ?? ""))}</td>
          <td>${escapeHtml(item.shcool_adress ?? "")}</td>
          <td>${escapeHtml(item.school_phone ?? "")}</td>
          <td>
            ${
              website
                ? `<a href="${escapeAttr(website)}" target="_blank" class="website-link" onclick="event.stopPropagation();">${escapeHtml(website)}</a>`
                : ""
            }
          </td>
          <td>${escapeHtml(remark)}</td>
          <td>
            <button
              class="btn btn-sm btn-outline-primary copy-row-btn"
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

  els.schoolTableBody.innerHTML = rowsHtml;

  document.querySelectorAll(".copy-row-btn").forEach((btn) => {
    btn.addEventListener("click", handleCopyRow);
  });

  document.querySelectorAll(".school-row").forEach((row) => {
    row.addEventListener("click", handleSelectRow);
  });
}

function updateCountInfo() {
  els.countInfo.value = `共 ${state.filteredData.length} 筆 / 全部 ${state.rawData.length} 筆`;
}

function updateSortIndicators() {
  els.headerCells.forEach((th) => {
    const key = th.dataset.key;
    const indicator = th.querySelector(".sort-indicator");

    if (!indicator) return;

    if (key === state.sortKey) {
      indicator.textContent = state.sortDir === "asc" ? "▲" : "▼";
    } else {
      indicator.textContent = "";
    }
  });
}

function handleSortClick(event) {
  const key = event.currentTarget.dataset.key;
  if (!key) return;

  if (state.sortKey === key) {
    state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
  } else {
    state.sortKey = key;
    state.sortDir = "asc";
  }

  applyFiltersAndRender();
}

function handleSelectRow(event) {
  const index = Number(event.currentTarget.dataset.index);
  const item = state.filteredData[index];
  if (!item) return;

  state.selectedSchoolCode = item.school_code || "";
  renderSelectedSchool(item);
  refreshSelectedRowHighlight();

  document.dispatchEvent(
    new CustomEvent("school:selected", {
      detail: {
        school: item,
      },
    }),
  );
}

function refreshSelectedRowHighlight() {
  document.querySelectorAll(".school-row").forEach((row) => {
    const code = row.dataset.schoolCode || "";
    row.classList.toggle("is-selected", code === state.selectedSchoolCode);
  });
}

function syncSelectedPanelAfterRender() {
  if (!state.selectedSchoolCode) return;

  const selectedItem = state.filteredData.find(
    (item) => item.school_code === state.selectedSchoolCode,
  );

  if (selectedItem) {
    renderSelectedSchool(selectedItem);
    refreshSelectedRowHighlight();
  } else {
    clearSelectedPanelIfNotFound();
  }
}

function clearSelectedPanelIfNotFound() {
  state.selectedSchoolCode = "";
  els.selectedSchoolEmpty.classList.remove("d-none");
  els.selectedSchoolPanel.classList.add("d-none");

  els.detailCityId.textContent = "－";
  els.detailGroupCode.textContent = "－";
  els.detailDeptCode.textContent = "－";
  els.detailGroup.textContent = "－";
  els.detailDepartment.textContent = "－";

  document.dispatchEvent(
    new CustomEvent("school:cleared", {
      detail: {},
    }),
  );
}

function renderSelectedSchool(item) {
  els.selectedSchoolEmpty.classList.add("d-none");
  els.selectedSchoolPanel.classList.remove("d-none");

  els.selectedSchoolTitle.textContent = item.school_name ?? "－";
  els.detailSchoolCode.textContent = item.school_code ?? "－";
  els.detailSchoolName.textContent = item.school_name ?? "－";
  els.detailCityName.textContent = item.city_name ?? "－";
  els.detailCityId.textContent = item.city_code ?? "－";
  els.detailSchoolOwnship.textContent = item.school_ownship ?? "－";

  els.detailGroupCode.textContent = "－";
  els.detailDeptCode.textContent = "－";
  els.detailGroup.textContent = "－";
  els.detailDepartment.textContent = "－";

  els.detailAddress.textContent = item.shcool_adress ?? "－";
  els.detailPhone.textContent = item.school_phone ?? "－";
  els.detailRemark.textContent = item.remark ?? "";

  if (item.school_website) {
    els.detailWebsite.innerHTML = `
      <a href="${escapeAttr(item.school_website)}" target="_blank" class="detail-link">
        ${escapeHtml(item.school_website)}
      </a>
    `;
  } else {
    els.detailWebsite.textContent = "－";
  }
}

async function handleCopyRow(event) {
  event.stopPropagation();

  const index = Number(event.currentTarget.dataset.index);
  const item = state.filteredData[index];
  if (!item) return;

  const text = formatSingleRowText(item);

  try {
    await navigator.clipboard.writeText(text);
    showCopyMessage("單筆資料已複製");
  } catch (err) {
    console.error(err);
    showCopyMessage("複製失敗，請確認瀏覽器是否允許剪貼簿權限", true);
  }
}

async function handleCopyVisible() {
  if (!state.filteredData.length) {
    showCopyMessage("目前沒有可複製的資料", true);
    return;
  }

  const header = [
    "school_code",
    "school_name",
    "school_ownship",
    "city_name",
    "city_code",
    "shcool_adress",
    "school_phone",
    "school_website",
    "remark",
  ].join("\t");

  const lines = state.filteredData.map((item) =>
    [
      item.school_code ?? "",
      item.school_name ?? "",
      item.school_ownship ?? "",
      item.city_name ?? "",
      item.city_code ?? "",
      item.shcool_adress ?? "",
      item.school_phone ?? "",
      item.school_website ?? "",
      item.remark ?? "",
    ].join("\t"),
  );

  const text = [header, ...lines].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    showCopyMessage(`已複製 ${state.filteredData.length} 筆資料`);
  } catch (err) {
    console.error(err);
    showCopyMessage("複製失敗，請確認瀏覽器是否允許剪貼簿權限", true);
  }
}

async function handleCopySelected() {
  if (!state.selectedSchoolCode) {
    showSelectedCopyMessage("尚未選取學校", true);
    return;
  }

  const item = state.rawData.find(
    (row) => row.school_code === state.selectedSchoolCode,
  );
  if (!item) {
    showSelectedCopyMessage("找不到選取資料", true);
    return;
  }

  const text = formatSelectedSchoolText(item);

  try {
    await navigator.clipboard.writeText(text);
    showSelectedCopyMessage("已複製選取學校資料");
  } catch (err) {
    console.error(err);
    showSelectedCopyMessage("複製失敗，請確認瀏覽器是否允許剪貼簿權限", true);
  }
}

function formatSingleRowText(item) {
  return [
    `school_code: ${item.school_code ?? ""}`,
    `school_name: ${item.school_name ?? ""}`,
    `school_ownship: ${item.school_ownship ?? ""}`,
    `city_name: ${item.city_name ?? ""}`,
    `city_code: ${item.city_code ?? ""}`,
    `shcool_adress: ${item.shcool_adress ?? ""}`,
    `school_phone: ${item.school_phone ?? ""}`,
    `school_website: ${item.school_website ?? ""}`,
    `remark: ${item.remark ?? ""}`,
  ].join("\n");
}

function formatSelectedSchoolText(item) {
  return [
    `學校代號\t${item.school_code ?? ""}`,
    `學校\t${item.school_name ?? ""}`,
    `城市\t${item.city_name ?? ""}`,
    `城市代號\t${item.city_code ?? ""}`,
    `學校類型\t${item.school_ownship ?? ""}`,
    `類群代號\t${els.detailGroupCode.textContent || ""}`,
    //`類群名稱\t${els.detailGroup.textContent || ""}`,
    `科系代號\t${els.detailDeptCode.textContent || ""}`,
    //`科系名稱\t${els.detailDepartment.textContent || ""}`,
  ].join("\n");
}

function resetFilters() {
  els.keywordInput.value = "";
  els.cityFilter.value = "";
  els.ownshipFilter.value = "";
  state.sortKey = "";
  state.sortDir = "asc";
  applyFiltersAndRender();
  showCopyMessage("已重設篩選");
}

function showCopyMessage(message, isError = false) {
  els.copyMessage.textContent = message;
  els.copyMessage.className = isError ? "copy-error" : "copy-success";

  clearTimeout(showCopyMessage._timer);
  showCopyMessage._timer = setTimeout(() => {
    els.copyMessage.textContent = "";
    els.copyMessage.className = "small-note";
  }, 2500);
}

function showSelectedCopyMessage(message, isError = false) {
  els.selectedCopyMessage.textContent = message;
  els.selectedCopyMessage.className = isError ? "copy-error" : "copy-success";

  clearTimeout(showSelectedCopyMessage._timer);
  showSelectedCopyMessage._timer = setTimeout(() => {
    els.selectedCopyMessage.textContent = "";
    els.selectedCopyMessage.className = "small-note";
  }, 2500);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function bindEvents() {
  els.keywordInput.addEventListener("input", applyFiltersAndRender);
  els.cityFilter.addEventListener("change", applyFiltersAndRender);
  els.ownshipFilter.addEventListener("change", applyFiltersAndRender);
  els.copyVisibleBtn.addEventListener("click", handleCopyVisible);
  els.copySelectedBtn.addEventListener("click", handleCopySelected);
  els.resetBtn.addEventListener("click", resetFilters);

  els.headerCells.forEach((th) => {
    th.addEventListener("click", handleSortClick);
  });
}



bindEvents();
loadData();
