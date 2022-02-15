
// Creates image element and appends it to the div
// var img = document.createElement("img");
// img.src = "../assets/magic8ball_extra.png";
// var src = document.getElementById("answers");
// src.appendChild(img);

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
    document.getElementById("8ball").classList.toggle("shaking");
}

function SwapImage(){
    imgShake();
    var shakeElement = document.getElementById("8ball");
    shakeElement.addEventListener('animationend', imgShake);
    // in order to get image 19.png to pop up, Math.random must
    // return .95 or greater which doesn't happen often
    const index = Math.floor(Math.random() * 20);
    console.log(index);
    setTimeout(() => {
        document.getElementById("8ball").src="../assets/" + index + ".png";
    }, 500);
};