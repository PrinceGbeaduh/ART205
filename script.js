let menu = document.querySelector('#men-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('f-times');
    menu.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('f-times');
    navbar.classList.remove('active');
}

if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
}

else{
    document.querySelector('#scroll-top').classList.remove('active');
}

function loader(){
    document.querySelector('.loader-container').classlist.add('fade-out')
}