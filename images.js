const memoryWrapper = document.querySelector(".memory-game");

// Array with images
const images = [
  {data: 1, image: "images/img1.png"},
  {data: 2, image: "images/img2.png"},
  {data: 3, image: "images/img3.png"},
  {data: 4, image: "images/img4.png"},
  {data: 5, image: "images/img5.png"},
  {data: 6, image: "images/img6.png"},
  {data: 7, image: "images/img7.png"},
  {data: 8, image: "images/img8.png"},
];


// Duplicates the array
const allImages = images.concat(images);


// Create card template 
function createImages(data, image) {
  return `<div class="memory-card" data-framework=${data}>
  <img class="front-face" src="${image}" alt="${data}">
  <img class="back-face" src="images/front.png" alt="rosa bandet">
  </div>`;
};
  

// Send the cards to the DOM
function generateImages() {
  allImages.forEach(item => {
    const element = createImages(item.data, item.image);
    memoryWrapper.innerHTML += element;
  });
};


// Run the generateImages function (which send the cards to the DOM)
generateImages();
  