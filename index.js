const  mainElement = document.getElementById("main");
if (mainElement) {
    mainElement.remove();
}
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Najma is the champion";
