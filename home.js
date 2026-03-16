const dropDownBtn = document.getElementById("dropdown_btn");
const dropDownMenu = document.getElementById("dropdown_menu");

dropDownBtn.addEventListener('click', () => {
    dropDownBtn.classList.toggle("hidden");
    dropDownMenu.classList.toggle("hidden");
})