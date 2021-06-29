const popup = document.querySelector('.award-popup');
const toggle = document.querySelector('.toggle-box');

window.onload = () => {
  setTimeout(function() {
    popup.style.display = " block";
  }, 2000);
}
toggle.addEventListener("click",()=> {
  popup.style.display ="none";
});