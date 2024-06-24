let imageElement = document.getElementById("image");
let warningmeassage = document.getElementById("warningMessage");
let originalImageWidth = "200px";
let imageWidth = document.getElementById("imageWidth");
imageElement.style.width = originalImageWidth;
let finalwidth = parseInt(originalImageWidth);
imageWidth.textContent = originalImageWidth;
//console.log(parseInt(originalImageWidth));

function increment() {
    finalwidth = finalwidth + 5;
    if (finalwidth < 100) {
        warningmeassage.textContent = "Not visible. Increase the size of the Image.";
    } else if (finalwidth > 300) {
        warningmeassage.textContent = "Too big. Decrease the size of the Image.";
    } else {

        imageElement.style.width = finalwidth + "px";
        imageWidth.textContent = finalwidth + "px";
        warningmeassage.textContent = '';
    }

}

function decrement() {
    finalwidth = finalwidth - 5;
    if (finalwidth < 100) {
        warningmeassage.textContent = "Not visible. Increase the size of the Image.";
    } else if (finalwidth > 300) {
        warningmeassage.textContent = "Too big. Decrease the size of the Image.";
    } else {

        imageElement.style.width = finalwidth + "px";
        imageWidth.textContent = finalwidth + "px";
        warningmeassage.textContent = '';
    }

}