
console.log(pickedColor);
console.log(colors);

var colorPads = document.querySelectorAll(".color-pad");

colorPads.forEach(element => {
    element.onclick = () => {
        if(element.id == pickedColor) {
            document.querySelector("#color-indicator").style.backgroundColor = `#${pickedColor}`;
            
        } else {
            element.style.display = "none";
        }
    }    
});