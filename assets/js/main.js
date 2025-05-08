// === section02 signature menu ===
const tabItem = document.querySelectorAll(".sec02__tab-list");
const tabContent = document.querySelectorAll(".sec02__tab-menu");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // a 
    
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});


// === section04 image hover ===