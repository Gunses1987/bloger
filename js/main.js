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



var b1 =document.querySelector('#b1')
var b2 =document.querySelector('#b2')
var b3 =document.querySelector('#b3')
var b4 =document.querySelector('#b4')

console.log(b1, b2, b3, b4)

var rightArr =document.querySelector('#right')
var leftArr =document.querySelector('#left')

rightArr.addEventListener('click',() => {
    console.log("clicked3")
    b3.classList.remove('display-none')
    b4.classList.remove('display-none')
    b1.classList.add('display-none')
    b2.classList.add('display-none')
    rightArr.style.color='gray'
    leftArr.style.color='black'
    
});

leftArr.addEventListener('click',() => {
    console.log("clicked3")
    b1.classList.remove('display-none')
    b2.classList.remove('display-none')
    b3.classList.add('display-none')
    b4.classList.add('display-none')
    leftArr.style.color='gray'
    rightArr.style.color='black'
    
});



