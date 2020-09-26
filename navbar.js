
let toggle = document.getElementById('toggle');
console.log(toggle);

toggle.addEventListener('click', toggleMenu);

function toggleMenu(){
    let menuDiv = document.getElementById('responsive-nav');
    console.log('click detected');
   
    if (menuDiv.classList.contains('active')){
        menuDiv.classList.remove('active');
    }else {
        menuDiv.classList.add('active')
    }
  
}