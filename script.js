 const close = document.querySelector('.close');

const navshow = () =>{
    const burger = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-list");
burger.addEventListener('click',()=>{
    navMenu.classList.toggle('nav-active-list');



})

};

navshow();



const servicesShow = ()=>{
    
const logo = document.querySelector('nav-logo');
const servicesLink= document.querySelector(".serviceslink");
const servicesActive= document.querySelector('.services-active');
const mainPages = document.querySelector('.main-pages');

const servicess= document.querySelector('.servicess');    
        servicesLink.addEventListener('click',()=>{

            servicess.classList.toggle('services-active');
            mainPages.classList.toggle('delete-main');
            
         })
        
         
    } 



    const newshow= ()=>{
        const logo = document.querySelector('nav-logo');
        const servicess= document.querySelector('.servicess');    


        logo.addEventListener('click' ,()=> {

            servicess.classList.toggle('page-full');

         })

    }
    
    

    servicesShow();

    const portfiloShow = ()=>{
        const portfilolink = document.querySelector('.portfilolink');

    }

    const mainPages = document.querySelector('.main-pages');
    const servicess = document.querySelector('.servicess')
    const servicesLink = document.querySelector('.serviceslink');
    

