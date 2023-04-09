const nameEl = document.querySelector('.name');
const aboutEl = document.querySelector('#aboutLink');
const workEl = document.querySelector('#workLink');
const contactEl = document.querySelector('#contactLink');
const aboutWorkContactEl = document.querySelector('.aboutWorkContact');
const phoneEl = document.querySelector('#phone');
const emailEl = document.querySelector('#email');
const githubEl = document.querySelector('#github');
const linkedInEl = document.querySelector('#linkedIn');

const init = () => {
  const nameLetters = 'JESSICA ZELASKY';

  for (let i = 0; i < nameLetters.length; i++) {
    setTimeout(() => {
      nameEl.append(nameLetters[i]);
    }, 200 * i); // change back to 200 when done editing
  }

  setTimeout(() => {
    aboutEl.classList.toggle('links-transformed-state-1');
    workEl.classList.toggle('links-transformed-state-1');
    contactEl.classList.toggle('links-transformed-state-1');
  }, 2500); // change back to 2500 when done editing
};

const transform = () => {
  if (!nameEl.classList.contains('name-transformed-state')) {
    nameEl.classList.toggle('name-transformed-state');
    aboutEl.classList.toggle('links-transformed-state-2');
    workEl.classList.toggle('links-transformed-state-2');
    contactEl.classList.toggle('links-transformed-state-2');
  }
  aboutWorkContactEl.textContent = ' ';
  phoneEl.textContent = ' ';
  emailEl.textContent = ' ';
  linkedInEl.textContent = ' ';
  githubEl.textContent = ' ';
};

const aboutPage = () => {
  transform();

  setTimeout(() => {
    const aboutInfo =
      'Hi! My name is Jessica Zelasky. I am a recent graduate of the University of Connecticut, with a Bachelor\'s degree in mathematics. I am currently working on a certificate program in full stack web development that will be completed in May 2023. At that time I will be seeking a full time position as a web developer. I am currently living in eastern CT but am interested in relocating. In my free time I enjoy crafting, reading, and spending time with my dog.';

    aboutWorkContactEl.append(aboutInfo);
  }, 500);
};

const workPage = () => {
  const modal = document.getElementById('myModal');
  const span = document.getElementsByClassName('close')[0];

  transform();

  setTimeout(() => {
    modal.style.display = 'block';
  }, 500);

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
};

const contactPage = () => {
  transform();

  setTimeout(() => {
    aboutWorkContactEl.append('Contact:');

    phoneEl.append('(860) 884-0629');
    emailEl.append('jzelasky@gmail.com');
    linkedInEl.append('LinkedIn');
    githubEl.append('Github');
  }, 500);
};



aboutEl.addEventListener('click', aboutPage);
workEl.addEventListener('click', workPage);
contactEl.addEventListener('click', contactPage);

init();



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('demo');
  let captionText = document.getElementById('caption');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


//TODO
//fix responsive sizing
//increase margins on about page
//make contact page centered
//try to make modal pop up higher
//reorganize js for slideshow
//make work screenshot imgs standard size
//add descriptions to work
//add link to web application to img
//see if any backend only applications are worth sharing
    //definitely team profile generator
//ask around if six is a good number of pieces for a portfolio

//1. Tech blog-- full stack, built from scratch, sql database 
//2. Weather --- mostly front end, uses 3rd party api
//3. 