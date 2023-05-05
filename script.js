// drop down menues: below

document.addEventListener('click', e => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropDown;
    if (isDropDownButton) {
        currentDropDown = e.target.closest("[data-dropdown]")
        currentDropDown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropDown => {
        if ( dropDown === currentDropDown) return
        dropDown.classList.remove("active")
    })
}) 

// logo click effect: below

let logoArray = document.getElementsByClassName('e-div');

for (let logo of logoArray) {
    logo.addEventListener('click', function() {
        logo.style.background = 'none';
        logo.firstChild.style.display = 'none';
        logo.style.border = 'whitesmoke 1px solid';
        logo.style.transition = '1s ease'
        logo.style.cursor = 'default'
    });
}
