document.addEventListener('DOMContentLoaded', () => {
    const prince = document.querySelector('.character')
    let bottom = 0
    let gravity = 0.9
    let isJumping = false
    let isGoingLeft = false
    let isGoingRight = false
    let left = 0
    let rightTimerId 
    let leftTimerId 


    function jump() {
        if (isJumping) return
        prince.classList.add('character')
        prince.classList.remove('character-slide-right')
        prince.classList.remove('character-slide-left')
        let timerUpId = setInterval(function() {
            if (bottom > 250) {
                clearInterval(timerUpId)
                let timerDownId = setInterval(function() {
                    if (bottom < 0) {
                        clearInterval(timerDownId)
                        isJumping = false
                    }
                    bottom -= 5
                    prince.style.bottom = bottom + 'px'
                }, 20)
            }
            isJumping = true
            bottom += 30
            bottom = bottom * gravity
            prince.style.bottom = bottom + 'px'
        }, 20)
    }


    function slideLeft() {
        prince.classList.add('character-slide-left')
        prince.classList.remove('character')
        prince.classList.remove('character-slide-right')
        if (isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval(function() {
            left -= 5
            prince.style.left = left + 'px'
        }, 20)
    }


    function slideRight() {
        prince.classList.add('character-slide-right')
        prince.classList.remove('character')
        prince.classList.remove('character-slide-left')
        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true
        rightTimerId = setInterval(function() {
            left += 5
            prince.style.left = left + 'px'
        }, 20)
    }


    //Yön Tuşlarına İşlev Atama
    function control(e) {
        if (e.keyCode === 38) {
            jump()
        } else if (e.keyCode === 37) {
            slideLeft() //Sol yön tuşuna basınca çalışacak
        } else if (e.keyCode === 39) {
            slideRight() //Sağ yön tuşuna basınca çalışacak
        }
    }
    document.addEventListener('keydown', control)
})