let botonTop = document.getElementById("toTop");

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if(
        document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20
    ) {
        botonTop.style.display = "block";
    } else {
        botonTop.style.display = "none";
    }
}

botonTop.addEventListener("click", toTop);

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};