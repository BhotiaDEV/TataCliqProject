function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
}
function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
}
function darkmode() {
  var toggleicon = document.getElementById("toggle-icon");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggleicon.classList.remove("fa-moon");
    toggleicon.classList.add("fa-sun");
  } else {
    toggleicon.classList.remove("fa-sun");
    toggleicon.classList.add("fa-moon");
  }
}
