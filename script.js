const images = [
    "pexels-instawally-176851.jpg",  
    "pic2.jpg" 
       
];

const sections = document.querySelectorAll("section");
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            let index = Array.from(sections).indexOf(entry.target);
            if (index !== -1) {
                document.body.style.backgroundImage = `url('${images[index]}')`;
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.5 }); 

hiddenElements.forEach((el) => observer.observe(el));
sections.forEach((section) => observer.observe(section));
