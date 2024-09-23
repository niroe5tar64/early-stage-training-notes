const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".date-display").innerHTML = `${year}年 ${month}月`;
});
