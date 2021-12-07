
console.log(pickedColor);
console.log(colors);

var colorPads = document.querySelectorAll(".color-pad");

colorPads.forEach(element => {
    element.onclick = () => {
        if(element.id == pickedColor) {
            console.log("IT'S A MATCH!");
        } else {
            console.log("FAIL");
        }
    }    
});