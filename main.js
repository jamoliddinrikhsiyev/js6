let num1 = document.querySelector('#arr')
let num2 = document.querySelector('#sum')
let span1 = document.querySelector('.get-arr')
let span2 = document.querySelector('.get-sum')
let btn = document.querySelector('.btn')
let btn1 = document.querySelector('.btn1')

function printArray(arr){
    arr = num1.value * 1 
    let b = []
    for(let x = 0; x <= arr; x++)b.push(x)
    return span1.textContent = b
}

function sum (num4){
    num4 = num2.value * 1
    let a = 0
    for(let z = num4; z > 0; z--)a+=z
    return span2.textContent = a
}

btn.addEventListener('click', printArray)

btn1.addEventListener("click", sum)
//by jamoliddinrikhsiev