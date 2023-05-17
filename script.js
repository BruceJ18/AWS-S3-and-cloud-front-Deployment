// drop down menues: below

document.addEventListener('click', (event) => {
    const isDropDownButton = event.target.matches("[data-dropdown-button]");
    if (!isDropDownButton && event.target.closest("[data-dropdown]") != null) return

    let currentDropDown;
    if (isDropDownButton) {
        currentDropDown = event.target.closest("[data-dropdown]")
        currentDropDown.classList.toggle("active")
    }
    
    document.querySelectorAll("[data-dropdown].active").forEach(dropDown => {
        if ( dropDown === currentDropDown) return
        dropDown.classList.remove("active")
    })
}) 

document.addEventListener('click', (event) => {
    const isDropDownButton2 = event.target.matches("[data-dropdown-button-2]");
    if (!isDropDownButton2 && event.target.closest("[data-dropdown-2]") != null) return

    let currentDropDown;
    if (isDropDownButton2) {
        currentDropDown = event.target.closest("[data-dropdown-2]")
        currentDropDown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown-2].active").forEach(dropDown => {
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
