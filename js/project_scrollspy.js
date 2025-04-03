// From Tutorial: https://youtu.be/TkI9b4jo0sg?si=OL7o6KEwXLSzMLG3

const dots = document.querySelectorAll(".nav-scroll-indicator a");

const removeActiveClass = () => {
    dots.forEach(dot =>{
        dot.classList.remove("active");
    });
};

const addActiveClass = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // Section Debug Log
            console.log(entry.target.id);
            let currentDot = document.querySelector(`.nav-scroll-indicator a[href='#${entry.target.id}']`);
            removeActiveClass();
            if(currentDot != null){
                currentDot.classList.add("active");
            }
            
        };
    });
};

const options = {
   threshold: 0.3
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");


sections.forEach(section =>{
    observer.observe(section);

});

const scrollIndicator = document.querySelector(".nav-scroll-indicator");
const scrollIndicatorArrow = document.querySelector(".nav-scroll-indicator .nav-scroll-arrow");

scrollIndicatorArrow.addEventListener("click", () =>{
    scrollIndicator.classList.toggle("active");
    scrollIndicatorArrow.classList.toggle("active");
});