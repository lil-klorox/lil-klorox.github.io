'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });








// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}















const modal = document.getElementById("projectModal");
if (modal) {
  const titleEl = modal.querySelector(".project-modal-title");
  const textEl  = modal.querySelector(".project-modal-text");
  const closeBtn = modal.querySelector(".project-modal-close");
  const backdrop = modal.querySelector(".project-modal-backdrop");

  const openButtons = document.querySelectorAll(".project-open");

  const openModal = (btn) => {
    titleEl.textContent = btn.dataset.modalTitle || "";
    textEl.textContent  = btn.dataset.modalText || "";
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  };

  openButtons.forEach(btn => btn.addEventListener("click", () => openModal(btn)));
  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}





