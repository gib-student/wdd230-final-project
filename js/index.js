// Hero button
document.querySelector('.hero-btn').addEventListener('click', () => {
  window.open('https://gib-student.github.io/wdd230-final-project/quote.html', '_blank');
});

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// fetch('https://raw.githubusercontent.com/gib-student/wdd230-final-project/main/data/index.json')
// .then(response => response.json())
// .then(data => {
//     // Populate html items
//     let count = 0;
//     for (let i in data.images) {
//         count += 1;
//         const item = data.images[i];
//         const imgUrl = 'https://raw.githubusercontent.com/gib-student/wdd230-final-project/main/images/homes/' + item.path;
//         const caption = item.caption;

//         // Make html objects
//         const slide         = document.createElement('div');
//         const numberText    = document.createElement('div');
//         const img           = document.createElement('img');
//         const text          = document.createElement('div');
//         const dot           = document.createElement('span');

//         // Fill objects
//         numberText.innerHTML    = count.toString() + ' / 5';
//         // fill img
//         (async () => {
//             const response = await fetch(imgUrl);
//             const imageBlob = await response.blob();
//             const reader = new FileReader();
//             reader.readAsDataURL(imageBlob);
//             reader.onloadend = () => {
//                 const base64data  = reader.result;
//                 img.src = base64data;
//             };
//         })();
//         img.alt = caption;
//         text.innerHTML          = caption;
//         dot.onclick = currentSlide(count);  

//         // Set classes
//         slide.className         = 'mySlides fade';
//         numberText.className    = 'numbertext';
//         text.className          = 'text';
//         dot.className           = 'dot';

//         // Set styles
//         img.style = 'width:100%';

//         // Append children to parents
//         slide.appendChild(numberText);
//         slide.appendChild(img);
//         slide.appendChild(text);
        // const slideContainer = document.querySelector('.slideshow-container');
//         slideContainer.appendChild(slide);
//         const dots = document.querySelector('.dots');
//         dots.appendChild(dot);
//     }
// });