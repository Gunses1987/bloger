console.log("main.js connected")



var nav =document.querySelector('.nav')
console.log(nav)
var icon =document.querySelector('#icon')
var closeMenu =document.querySelector('#close')


icon.addEventListener('click',() => {
    console.log("clicked")
    nav.classList.add('open',)
    icon.style.display='none'
    closeMenu.style.display='initial'
    
});


closeMenu.addEventListener('click',() => {
    console.log("clicked2")
    nav.classList.remove('open',)
    icon.style.display='initial'
    closeMenu.style.display='none'
    
});

// move up

var moveUp = document.querySelector('.move-up')
console.log(moveUp)

moveUp.addEventListener('click', ()=> {
    console.log("clicked2 moveUp")
    window.scrollTo(0, 0)

   

});








