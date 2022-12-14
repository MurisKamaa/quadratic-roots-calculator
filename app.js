const calcButt = document.querySelector('button');
const inputs = document.querySelectorAll('.inputs');
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const output = document.querySelector('.dispSolution')
let numA;
let numB;
let numC;
a.addEventListener('change', () => {
    numA = parseInt(a.value);
    if (numA === 0 || numA < -99 || numA > 99) {
        alert('a should lie between -99 and +99 and should not be 0')
        inputs[0].style.border = '2px solid red';
        output.innerText = '';
    } else {
        inputs[0].style.border = '2px solid gray';
    }
})

b.addEventListener('change', () => {
    numB = parseInt(b.value);
    if (numB < -99 || numB > 99) {
        alert('b should lie between -99 and +99')
        inputs[1].style.border = '2px solid red';
        output.innerText = '';
    } else {
        inputs[1].style.border = '2px solid gray';
    }
})

c.addEventListener('change', () => {
    numC = parseInt(c.value);
    if (numC < -99 || numC > 99) {
        alert('c should lie between -99 and +99')
        inputs[2].style.border = '2px solid red';
        output.innerText = '';
    } else {
        inputs[2].style.border = '2px solid gray';
    }
})

calcButt.addEventListener('click', () => {
    if (numA === '' || numB === '' || numC === '') {
        output.innerText = '';
    } else if (numB**2 < 4*numA*numC) {
        output.innerText = "Solution: x's roots are imaginary";
    } else if (numB**2 === 4*numA*numC) {
        let root = (-numB)/(2*numA);
        output.innerText = `Solution: x = ${root}`;
    } else {
        let root1 = (-numB + Math.sqrt(numB**2 - 4*numA*numC))/(2*numA);
        let root2 = (-numB - Math.sqrt(numB**2 - 4*numA*numC))/(2*numA);
        output.innerText = `Solution: x = ${root1}, x = ${root2}`;
    }
})

