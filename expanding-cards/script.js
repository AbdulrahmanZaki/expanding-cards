"use strict";

const panels = document.querySelectorAll(".panel");
// console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/* panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    } else {
      panel.classList.add("active");
    }
  });
}); */
