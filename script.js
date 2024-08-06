document.addEventListener("DOMContentLoaded", () => {
  let radioItem, menuItem;
  document
    .querySelectorAll(".menu input[type='radio']")
    .forEach(function (radio) {
      radio.addEventListener("click", function (e) {
        menuItem = e.target.closest("li"); // 取被點到的 li
        if (radioItem && radioItem == e.target) {
          radioItem.checked = false;
          radioItem = "";
        } else {
          radioItem = e.target;
        }
      });
    });

  document.addEventListener("click", function (e) {
    if (radioItem && !menuItem.contains(e.target)) {
      radioItem.checked = false;
      radioItem = "";
    }
  });

  // 輪播
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  let index = 0;

  const nextSlide = () => {
    index = (index + 1) % items.length;
    carouselInner.style.transform = `translateX(-${index * 100}%)`; // 橫向移動一張圖的寬
  };

  setInterval(nextSlide, 3000); // 每3秒切換一次
});
