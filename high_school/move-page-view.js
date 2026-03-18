(function () {
  const STYLE_ID = "move-page-view-style";

  function injectMovePageViewStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .page-view-mover {
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 1080;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        border-radius: 9999px;
        background: rgba(33, 37, 41, 0.88);
        backdrop-filter: blur(8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
      }

      .page-view-btn {
        border: 0;
        min-width: 44px;
        height: 44px;
        padding: 0 14px;
        border-radius: 9999px;
        background: #ffffff;
        color: #212529;
        font-weight: 700;
        font-size: 15px;
        line-height: 1;
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      }

      .page-view-btn:hover {
        background: #f8f9fa;
        transform: translateY(-1px);
      }

      .page-view-btn:active {
        transform: translateY(0);
      }

      .page-view-btn.is-active {
        background: #0d6efd;
        color: #fff;
      }

      @media (max-width: 767.98px) {
        .page-view-mover {
          right: 16px;
          bottom: 16px;
          gap: 6px;
          padding: 6px;
        }

        .page-view-btn {
          min-width: 40px;
          height: 40px;
          padding: 0 12px;
          font-size: 14px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function smoothMoveTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const top = window.scrollY + target.getBoundingClientRect().top - 12;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  function updateActiveButton() {
    const sections = [
      { id: "pageTopAnchor", btn: document.querySelector('[data-move-target="pageTopAnchor"]') },
      { id: "pageMiddleAnchor", btn: document.querySelector('[data-move-target="pageMiddleAnchor"]') },
      { id: "pageBottomAnchor", btn: document.querySelector('[data-move-target="pageBottomAnchor"]') },
    ];

    let currentId = "pageTopAnchor";
    let minDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const distance = Math.abs(el.getBoundingClientRect().top - 120);
      if (distance < minDistance) {
        minDistance = distance;
        currentId = section.id;
      }
    });

    sections.forEach((section) => {
      if (!section.btn) return;
      section.btn.classList.toggle("is-active", section.id === currentId);
    });
  }

  function bindMoveButtons() {
    const buttons = document.querySelectorAll(".page-view-btn[data-move-target]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-move-target");
        smoothMoveTo(targetId);
      });
    });
  }

  function initMovePageView() {
    injectMovePageViewStyle();
    bindMoveButtons();
    updateActiveButton();

    window.addEventListener("scroll", updateActiveButton, { passive: true });
    window.addEventListener("resize", updateActiveButton);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMovePageView);
  } else {
    initMovePageView();
  }
})();