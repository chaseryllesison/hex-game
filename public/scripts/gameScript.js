var colorPads = document.querySelectorAll(".color-pad");

colorPads.forEach(element => {
    element.onclick = () => {
        if(element.id == pickedColor) {
            document.querySelector("#color-indicator").style.backgroundColor = `#${pickedColor}`;
            colorPads.forEach(i => {
                if(i.id != pickedColor){
                    i.style.backgroundColor = `#${pickedColor}`;
                }
            })
            document.querySelector("#popUp").style.visibility = "visible";
        } else {
            element.style.display = "none";
        }
    }    
});