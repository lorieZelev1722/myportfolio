const menuBtn = document.querySelector('.menu-btn') || '';
const dropdownMenu = document.querySelector('.mobile-menu-dropdown') || '';


menuBtn.addEventListener('click',(e)=>{
   const el=e.currentTarget;

    if(el.classList.contains('close-menu')){
        el.src = 'assets/img/app.png';
        el.classList.remove('close-menu');
    }else{
        el.classList.add('close-menu');
        el.src = 'assets/img/menu (1).png';
    }

   dropdownMenu.classList.contains('hidden') ? dropdownMenu.classList.remove('hidden') : dropdownMenu.classList.add('hidden');
});