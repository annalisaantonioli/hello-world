'use strict';

const splitText = (txt) => {
    const letters = txt.innerText.split('')
    txt.innerText = ''
    letters.forEach(el => {
        const span = document.createElement('span')
        span.classList.add('letter')
        span.innerText = el
        txt.appendChild(span)
    });
}

const splitWords = (txt) => {
    const words = txt.innerText.split(/(\s+)/);
    txt.innerText = ''
    words.forEach(el => {
        const span = document.createElement('span')
        span.classList.add('word')
        span.innerText = el
        txt.appendChild(span)
    });
}



window.addEventListener('DOMContentLoaded', () => {
    const heading_one = document.querySelector('h1')
    const heading_two = document.querySelector('h2')

    splitText(heading_one)
    splitWords(heading_two)

    const letters = heading_one.querySelectorAll('.letter')
    const words = heading_two.querySelectorAll('.word')

  setTimeout(() => {
    heading_one.style.opacity = 1
    letters.forEach((el, i) => {
        el.style.setProperty("--animation-delay", `${ i * (0.6 / letters.length)}s`);
        el.classList.add('enter')
    })
    
    letters[letters.length - 1].addEventListener('transitionend', () => {
        heading_two.style.opacity = 1
        words.forEach((el, i) => {
            el.style.setProperty("--animation-delay", `${ i * (0.6 / words.length)}s`);
            el.classList.add('scaleIn')
    
        })
    })

    
  }, 500)




})

