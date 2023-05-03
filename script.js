const btn = document.getElementById("meu-btn");

btn.addEventListener("click", function(){

    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    this.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b}`);    

    console.log(this.textContent);
})

/* <h2 class="tit-sec">Seção de Fotos</h2> */

const tit_sec = document.querySelector(".tit-sec");

console.log(tit_sec)

tit_sec.addEventListener("click", function(){
    let original_fontsize = window.getComputedStyle(tit_sec).getPropertyValue("font-size");
    let value_fontsize = parseFloat(original_fontsize);
    
    console.log(value_fontsize);
    this.setAttribute("style", `font-size: ${value_fontsize - 10}px`);
})