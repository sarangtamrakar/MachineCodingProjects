

const data = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg"]

let globalIndex = 0;

const image = document.querySelector("#image_show")
image.setAttribute("src", data[globalIndex]);


function ChangeImage() {

    // adding event listeners for next button press
    document.querySelector("#nextBtn").addEventListener("click", function (e) {
        Increment();
    })

    // adding event listeners for next button press
    document.querySelector("#previousBtn").addEventListener("click", function (e) {
        Decrement();
    })
}



ChangeImage();


function Increment(){ 
    globalIndex = globalIndex + 1;
    let currIndex = Math.abs(globalIndex) % data.length;
    console.log(globalIndex);
    const image = document.querySelector("#image_show")
    image.setAttribute("src", data[currIndex]);
}


function Decrement() { 
    globalIndex = globalIndex - 1;
    currIndex = Math.abs(globalIndex)%data.length
    console.log(globalIndex);
    const image = document.querySelector("#image_show")
    image.setAttribute("src", data[currIndex]);
}


// setting Time Interval for auto changing of carousel;
setInterval(() => { 
    Increment();
},3000)




