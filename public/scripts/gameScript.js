console.log("script connected");

console.log(pickedColor);
console.log(colors);

var colorPads = document.querySelectorAll(".color-pad");

colorPads.forEach(element => {
    element.onclick = () => {
        console.log(element.getAttribute('style'));
    }    
});