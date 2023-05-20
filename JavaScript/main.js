// Show more items in Portfolio

let btn = document.querySelector(".portfolio button");
let showMore = document.querySelectorAll(".portfolio-cont .hidden-card");
btn.onclick = () => {
  showMore.forEach((item) => {
    item.style.display = "block";
  });
  // hide button after click
  btn.style.display = "none";
};

// Footer ,Get full Year
let Year = document.querySelector(".footer .year");

Year.innerHTML = new Date().getFullYear();
