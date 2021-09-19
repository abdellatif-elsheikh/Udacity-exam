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
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let SectionPositionTop;
let currentSection;
const allSections = document.querySelectorAll("section");
const scrollToTop = document.querySelector(".scroll-to-top");
const navbarHeader = document.querySelector(".page__header");
const submitSection = document.querySelector("#submitSection");


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

setInterval(()=>{
        navbarHeader.classList.add("hide__page__header")
},3500)

function showNavbarOnscroll(){
    navbarHeader.classList.remove("hide__page__header")
}

function showScrollButton() {
    if (window.pageYOffset > 100) {
        scrollToTop.style.transform = "translatex(0)";
    }
    else{
        scrollToTop.style.transform = "translatex(80px)";
    }
}

function goToTheTop(e) {
    e.preventDefault();
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function addNavbarItem() {
    const navbarList = document.querySelector("#navbar__list");
    allSections.forEach((section,index) => {
            // Create new nav elements according to number of sections
            const navItem = document.createElement("li");
            const navLink = document.createElement("a");
            // Added a content and attributes to anchor element
            navLink.textContent = section.getAttribute("data-nav");
            navLink.setAttribute("href", `#${section.getAttribute("id")}`);
            navLink.setAttribute("class", "menu__link");
            navItem.appendChild(navLink);
            navbarList.appendChild(navItem);
    })
    clickNavLink()

}
addNavbarItem();

// Function to add active class to link associated to current section
function addActiveClassTolink() {
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach(navLink => {
        const currentNav = navLink.textContent;
        currentSectionData = currentSection.getAttribute("data-nav");
        if (currentNav === currentSectionData) {
            navLink.classList.add("activ-link");
        } else {
            navLink.classList.remove("activ-link");
        }
    })
}

// Go to target section pased on nav link
function clickNavLink() {
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", e => {
            const TargetLink = navLink.getAttribute("href").slice(1);
            let goTo = 0;
            allSections.forEach(section => {
                const targetSection = section.getAttribute("id");
                if (targetSection === TargetLink) {
                    goTo = (section.getBoundingClientRect().top - document.body.getBoundingClientRect().top);
                }
            })
            e.preventDefault();
            window.scrollTo({
                top: goTo,
                left: 0,
                behavior: 'smooth',
                duratuion: 2000
            })
        })
    })
}

// Add class 'active' to section when near top of viewport
// Create function that gaves me the current position of the section according to the top of the page



function activeCurrentSection(e) {
    allSections.forEach((section, index) => {
        SectionPositionTop = section.getBoundingClientRect().top;
        if (SectionPositionTop <= 500) {
            allSections.forEach((section) => {
                if (section === allSections[index]) {
                    section.classList.add("your-active-class");
                    currentSection = allSections[index];
                } else {
                    section.classList.remove("your-active-class");
                    return false;
                }
            })
        }
    });
    addActiveClassTolink();
    showScrollButton();
    showNavbarOnscroll();
}

/**
 * End Main Functions
 * Begin Events
 *
*/
window.onscroll = activeCurrentSection;
window.onresize = activeCurrentSection;
scrollToTop.onclick = goToTheTop;
submitSection.onclick = addNewSection;

// Build menu 

// Scroll to section on link click

// Set sections as active
