document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  document.querySelector(".date-display").innerHTML = `${year}年 ${month}月`;
});
