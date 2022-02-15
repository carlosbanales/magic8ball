//First attempt, was able to get the image to 
// pop up but not cycle through the rest of the images

// Creates image element and appends it to the div
// var img = document.createElement("img");
// img.src = "../assets/magic8ball_extra.png";
// var src = document.getElementById("answers");
// src.appendChild(img);

// was able to cycle through the images,

// var images = [];
// const index = 0;
// images[0] = "../assets/0.png";
// images[1] = "../assets/1.png";
// images[2] = "../assets/2.png";
// images[3] = "../assets/3.png";
// images[4] = "../assets/4.png";
// images[5] = "../assets/5.png";
// images[6] = "../assets/6.png";
// images[7] = "../assets/7.png";
// images[8] = "../assets/8.png";


function imgShake() {
    // shakes the image every other time
    document.getElementById("8ball").classList.toggle("shaking");
    // create shake element to be able to addEventListener to end animation
    var shakeElement = document.getElementById("8ball");
    // use animationend to end the event
    shakeElement.addEventListener('animationend', imgShake);
    console.log(shakeElement);
}

function SwapImage(){
    imgShake();
    // in order to get image 19.png to pop up, Math.random must
    // return .95 or greater which doesn't happen often
    const index = Math.floor(Math.random() * 20);
    // wait 500 ms to reassign the image object to a new image
    setTimeout(() => {
        document.getElementById("8ball").src="../assets/" + index + ".png";
    }, 500);
};