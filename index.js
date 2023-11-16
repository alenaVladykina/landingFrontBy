const elementBurger = document.getElementById('burgerIcon')
const menu = document.getElementById('menu')
const closeElement = document.getElementById('closeIcon')

const changeStyle = () => {
    menu.className = 'menuOpen'
    document.body.style.overflow = 'hidden'
}

const clickMenu = () => {
    menu.className = 'menu'
    document.body.style.overflow = 'auto'
}

const closeModal = () => {
    menu.className = 'menu'
    document.body.style.overflow = 'auto'
}

elementBurger.addEventListener('click', changeStyle)
closeElement.addEventListener('click', closeModal)
menu.addEventListener('click', clickMenu)

