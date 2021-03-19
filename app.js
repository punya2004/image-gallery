const pannel = document.querySelectorAll(`.pannel`);

function handleOpen(){
    this.classList.toggle("open");
}

function handleOpenActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
}

pannel.forEach(pannels => pannels.addEventListener("click",handleOpen));
pannel.forEach(pannels => pannels.addEventListener("transitionend",handleOpenActive));