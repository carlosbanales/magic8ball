// var img = document.createElement("img");
// img.src = "../assets/magic8ball_extra.png";
// var src = document.getElementById("answers");
// src.appendChild(img);

// var images = [];
// const index = 0;
// images[0] = "../assets/1.png";
// images[0] = "../assets/1.png";
// images[0] = "../assets/1.png";
// images[0] = "../assets/1.png";
// images[0] = "../assets/1.png";
// images[0] = "../assets/1.png";
// images[0] = "../assets/1.png";
// images[0] = "../assets/1.png";
// images[0] = "../assets/1.png";

function SwapImage(){
    const index = Math.floor(Math.random() * 20);
    console.log(index);
    document.getElementById("8ball").src="../assets/" + index + ".png";
}
