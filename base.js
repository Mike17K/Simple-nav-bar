var item_buttons = document.getElementsByClassName('b')


for(let i = 0; i < item_buttons.length; i++){
    item_buttons[i].addEventListener('mouseover',(e)=>{
        e.target.classList.add('focused')
    })
    item_buttons[i].addEventListener('mouseout',(e)=>{
        e.target.classList.remove('focused')
    })
}