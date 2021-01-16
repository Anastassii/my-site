let page = document.querySelector('.page');

let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function(click) {
  page.classList.toggle('dark-theme');
  page.classList.toggle('white-theme');  
};