// Troca icon do sol e da lua quando premido
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('#dark-mode-icon');

sunIcon.addEventListener('click', () => {
    sunIcon.classList.toggle('fa-sun');
    sunIcon.classList.toggle('fa-moon');

    moonIcon.classList.toggle('fa-moon');
    moonIcon.classList.toggle('fa-sun');

    moonIcon.style.display = 'inline-block';

    setTimeout(() => {
        sunIcon.style.display = 'none';
        moonIcon.style.opacity = '1';
    }, 500);
});

//Liga dark mode
function turnOnDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//Calculadora
const calcIcon = document.querySelector('.icon');

calcIcon.addEventListener('click', () => {
    const expression = prompt('Enter a math expression:');

    try {
        const result = eval(expression);
        if (isNaN(result)) {
            throw new Error('Invalid input');
        }
        alert(`Result: ${result}`);
    } catch (error) {
        alert(error.message);
    }
});

const currentDate = new Date();
const dateElement = document.querySelector('#current-date');

dateElement.textContent = currentDate.toDateString();


function updateCurrentDate() {
    const currentDate = new Date();
    const dateElement = document.querySelector('#current-date');

    dateElement.textContent = currentDate.toDateString();
}

setInterval(updateCurrentDate, 1000);




function atualizarHora() {
    const timeElement = document.querySelector('#current-time');
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    timeElement.textContent = hora + ':' + minuto + ':' + segundo;
}

setInterval(atualizarHora, 1000);




/*
const animatedContentArticle = document.querySelector('.animated-content-article');

window.addEventListener('scroll', () => {
   if (window.scrollY >= window.innerHeight) { // Check if user has scrolled past viewport height
     animatedContentArticle.classList.add('show'); // Show the animated content article by adding show class
   } else {
     animatedContentArticle.classList.remove('show'); // Hide the animated content article by removing show class
   }
});

*/

window.addEventListener('scroll', () => {
    const animatedContentArticle = document.querySelector('.animated-content-article');
    if (window.scrollY < window.innerHeight && window.scrollY > 0) {
        // User is scrolling above the section
        animatedContentArticle.classList.add('show');
        animatedContentArticle.style.height = "100%";
        if (window.scrollY > window.innerHeight) {
            animatedContentArticle.classList.remove('show');
        }
    }
    else {
        // User has scrolled away from the section
        animatedContentArticle.classList.remove('show');
        
    }

});


//email form 
document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;

    // send email using the values from the form
  });



//print width and height of the window
console.log("Width = " + window.innerWidth + " Height = " + window.innerHeight);

//animate the image inside the nav bar
var img = document.getElementById("profilePicture");
img.style.position = "relative";
img.style.left = "0px";
img.style.top = "0px";