// SECTION SCROLL ANIMATION

const hiddenSections =
document.querySelectorAll(
'.featured-projects, .about-section, .experience-section, .projects-section, .skills-section'
);

hiddenSections.forEach(section => {
    section.classList.add('hidden-section');
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show-section');

        }

    });

},{
    threshold:0.15
});

hiddenSections.forEach(section => {
    observer.observe(section);
});


// ACTIVE NAVIGATION

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".sidebar-menu a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if(
          link.getAttribute("href")
          .includes(current)
        ){

            link.classList.add("active-link");

        }

    });

});

