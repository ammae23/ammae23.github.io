const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");

yesBtn.addEventListener("click", ( ) => {
    question.innerHTML = "Aaaaaaaaa, I-i like you too! >////<";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";
 
});

noBtn.addEventListener("mouseover", ( ) => {
    const noBtnReact = noBtn.getBoundingClientRect( );
    const maxX = window.innerWidth - noBtnRect.width;
    const maxy = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random( ) * maxX);
    const randomY = Math.floor(Math.random( ) * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});