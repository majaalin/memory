// Array with pictures
const pictures = [
  {data: 1, image: "images/img1.png" },
  {data: 2, image: "images/img2.png" },
  {data: 3, image: "images/img3.png" },
  {data: 4, image: "images/img4.png" },
  {data: 5, image: "images/img5.png" },
  {data: 6, image: "images/img6.png" },
  {data: 7, image: "images/img7.png" },
  {data: 8, image: "images/img8.png" },
];

// Duplicates array
const allPictures = pictures.concat(pictures);


const memoryWrapper = document.querySelector(".memory-game");

  // Create cards template 
  const createPictures= (data, image) => {
    return `<div class="memory-card" data-framework=${data}>
    <img class="front-face" src="${image}" alt="">
    <img class="back-face" src="images/front.png" alt="">
    </div>`;
  };
  
  // Render the cards to the DOM
  const generatePictures= () => {
    allPictures.forEach(item => {
      const element = createPictures(item.data, item.image);
      memoryWrapper.innerHTML += element;
    });
  };

  generatePictures();