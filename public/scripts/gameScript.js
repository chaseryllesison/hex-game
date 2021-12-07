console.log("script connected");



var colorPads = document.querySelectorAll(".color-pad");

colorPads.forEach(element => {
    element.onclick = () => {
        console.log(element.getAttribute('style'));
    }    
});