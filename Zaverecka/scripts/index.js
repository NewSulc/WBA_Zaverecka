const arrowDown = document.getElementById('arrowDown');
const land = document.getElementById('land');

arrowDown.onclick = function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    console.log(land.style.backgroundImage);
}

let counter = 0;
const imgArray = ["url(Images/float.jpg)", "url(Images/b17.jpg)", "url(Images/sunset.jpg)", "url(Images/coolaf.jpg)", "url(Images/landingImage.png)"];
setInterval(function(){
    land.style.backgroundImage = imgArray[counter];
    counter++;
    if(counter == imgArray.length){
        counter = 0;
    }
}, 5000);