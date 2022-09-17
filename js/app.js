/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
 * 
*/



/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section")
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Creating the navigation list items for each section 
//each list item is the section heading
function CreateNavBar() {
    const navBar = document.querySelector("#navbar__list")
    for (section of sections) {
        const li = document.createElement('li');
        const sectionName = section.querySelector("h2").innerText;
        li.appendChild(document.createTextNode(sectionName));
        navBar.appendChild(li);
        li.className = "menu__link";
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav bar with the menu by calling the function above
CreateNavBar()


// Add class 'active' to section when near top of viewport to make it highlighted
function activateClass() {
    for (section of sections) {
        const recTop = section.getBoundingClientRect().top
        const recBottom = section.getBoundingClientRect().bottom
        section.classList.toggle("your-active-class", recTop <= 50 && recBottom > 60)
    }
}


// Scroll to anchor ID using scrollIntoView event
function scrollToSection(button) {
    const section = document.querySelector(`[data-nav="${button.innerText}"]`)
    section.scrollIntoView({ behavior: "smooth" })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click
const sectionButtons = document.querySelectorAll('li')


sectionButtons.forEach(button => {
    button.addEventListener("click", function () { scrollToSection(button) })
})

// Set sections as active
window.addEventListener("scroll", activateClass)