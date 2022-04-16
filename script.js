var modal = document.querySelector("#modalId");

window.onclick = (event) => {
    if(event.target == modal) 
        modal.style.display = "none";
}
