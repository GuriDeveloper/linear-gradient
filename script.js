const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const bg = document.querySelector('.bg')

function getRandomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return { r, g, b }
}

btn1.addEventListener('click', () => {
    const ranOne = getRandomColor()
    const randTwo = getRandomColor()
    btn1.innerHTML = `#${ranOne.r}${ranOne.g}${ranOne.b}`
    btn2.innerHTML = `#${randTwo.r}${randTwo.g}${randTwo.b}`
    console.log(btn2)
    bg.style.backgroundImage = `linear-gradient(to right,rgb(${ranOne.r},${ranOne.g},${ranOne.b}),rgb(${randTwo.r},${randTwo.g},${randTwo.b}))`
})

btn2.addEventListener('click', () => {
    const ranOne = getRandomColor()
    const randTwo = getRandomColor()
    btn1.innerHTML = `#${ranOne.r}${ranOne.g}${ranOne.b}`
    btn2.innerHTML = `#${randTwo.r}${randTwo.g}${randTwo.b}`
    bg.style.backgroundImage = `linear-gradient(to right,rgb(${ranOne.r},${ranOne.g},${ranOne.b}),rgb(${randTwo.r},${randTwo.g},${randTwo.b}))`

})

