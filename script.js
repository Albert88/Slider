let list = document.querySelector(" .carusel_item");
let items = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let itemsLength = items.length - 1;

setTimeout(relodeCarusel(), 3000);
next.onclick = function () {
  if (active + 1 > itemsLength) {
    active = 0;
  } else {
    active = active + 1;
  }
  relodeCarusel();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = itemsLength;
  } else {
    active = active - 1;
  }
  relodeCarusel();
};

const reloadSlider = setInterval(() => {
  next.click();
}, 3000);

function relodeCarusel() {
  let left = items[active].offsetLeft;
  list.style.left = -left + "px";

  let activeDot = document.querySelector(".dots li.active");
  activeDot.classList.remove("active");
  dots[active].classList.add("active");
}
dots.forEach((item, index) => {
  item.addEventListener("click", function () {
    active = index;
    relodeCarusel();
  });
});
// comment
