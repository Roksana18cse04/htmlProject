const nextEL =document.querySelectorAll(".next");

let imgEL=document.querySelectorAll("img");

console.log(imgEL);

const imageContainerEl =document.querySelectorAll(".image-container");

let currentImage =1;

nextEL.addEventListener("click",()=> {
    //code to be executed when the button is clicked
        currentImage ++
        updatedImage()
    });
function updatedImage(){
    // code to be executed when the image is updated
   if(currentImage > imgEL.length){
    currentImage = 1;
   }
    imageContainerEl.style.
    transform=`translateX(${(currentImage-1) * 500}px)`;
}