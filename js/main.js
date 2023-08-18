const div = document.querySelector('div')
const x = document.querySelector('h4')
const btn = document.querySelector('button')


x.addEventListener('click', () => {
    div.style.display = "none";
    btn.style.display = "block"
})

btn.addEventListener('click', () => {
    div.style.display = "block";
    btn.style.display = "none"
})