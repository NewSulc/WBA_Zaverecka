const toggleBtn = document.querySelector('#hamburger');
const dropdown = document.querySelector('#dropdownMenu');

toggleBtn.onclick = function () {
    dropdown.classList.toggle('open');
    toggleBtn.classList.toggle('active');
}