const abrir_menu = document.querySelector('.MeNu_Icon');
const menu = document.querySelector('.menu')

abrir_menu.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    
    if(menu.classList.contains('spread')
        &&e.target != abrir_menu &&e.target != menu  ){
            

        menu.classList.toggle("spread")
                
    }
})



