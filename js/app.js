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
const allSections = document.querySelectorAll("section");;



/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


// Function to add active class to link associated to current section
function addActiveClassTolink(){
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach(navLink => {
        const currentNav = navLink.textContent;
        currentSectionData = currentSection.getAttribute("data-nav")
        if(currentNav === currentSectionData){
            console.log(currentNav);
            navLink.classList.add("activ-link")
        }else{
            navLink.classList.remove("activ-link")
            
        }
        
    })
    
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function addNavbarItem(){
    const navbarList = document.querySelector("#navbar__list");
    allSections.forEach(section => {
        // Create new nav elements according to number of sections
        const navItem = document.createElement("li");
        const navLink = document.createElement("a");
        // Added a content and attributes to anchor element
        navLink.textContent = section.getAttribute("data-nav")
        navLink.setAttribute("href", `#${section.getAttribute("id")}`);
        navLink.setAttribute("class", "menu__link");
        navItem.appendChild(navLink);
        navbarList.appendChild(navItem);
    })

    return allSections
}

addNavbarItem()

// Add class 'active' to section when near top of viewport
// Create function that gaves me the current position of the section according to the top of the page

function activeCurrentSection(e){
    allSections.forEach((section, index) => {
        SectionPositionTop = section.getBoundingClientRect().top;
        if(SectionPositionTop <= 500){
            allSections.forEach((section) =>{
                if(section === allSections[index]){
                    section.classList.add("your-active-class");
                    currentSection = allSections[index]
                }else{
                    section.classList.remove("your-active-class");
                    return false
                }
            })
        }
    });

    addActiveClassTolink()
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/
window.onscroll = activeCurrentSection;
window.onresize = activeCurrentSection;

// Build menu 

// Scroll to section on link click

// Set sections as active
