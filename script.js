const inputValue = document.querySelector('#inputValue')
const submitButton = document.querySelector('.submit')
const inputLine = document.querySelector('.input-line')
submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputValue.value.match(validRegex)){
        if(inputLine.classList.contains('error')){
            inputLine.classList.remove('error')
        }
        window.location.reload()
        return true
    }else{
        inputLine.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    }
})

const card = document.querySelector('.card')
const THRESHOLD = 20

card.addEventListener('mousemove', (e)=>{
    const { clientX, clientY, currentTarget } = e
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget

    const horizontal = (clientX - offsetLeft) / clientWidth
    const vertical = (clientY - offsetTop) / clientHeight
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD)
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2)

    card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1) scale(1.3)`
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`
    }
})

card.addEventListener('mouseleave', (e)=>{
    card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`
})