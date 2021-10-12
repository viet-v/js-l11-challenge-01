const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function (){                /* Create images array from API source */
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    // console.log(images);
    selectRandomImage(images);
};


const selectRandomImage = function (images) {      /* Take a random image from images array */
    const randomIndex = Math.floor(Math.random() * images.length);  /*Math.floor round down number, so we get random between 0 - 99, not 1 - 100*/
    // console.log(randomIndex);
    const randomImage = images[randomIndex];
    console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function (randomImage) {      /* Show author name and image by info from randomImage */
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress; 
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", function (){      /* Show author and image only when click button */
    getImage();
});
