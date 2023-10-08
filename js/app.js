const gridDOMElement = document.querySelector ('.grid');
console.log('gridDOMElement', gridDOMElement)

for (let i = 1; i < 101; i++) {
    const fizz = i % 3;
    const buzz = i % 5;
    const n = i;

    const boxStringStandard = '<div class="box box-standard">' + n + '</div>'
    const boxStringFizz = '<div class="box box-fizz">Fizz</div>';
    const boxStringBuzz = '<div class="box box-buzz">Buzz</div>';
    const boxStringFizzBuzz = '<div class="box box-fizz-buzz">FizzBuzz</div>';
        
    if (fizz === 0 && buzz === 0) {
        // console.log("FizzBuzz")
        gridDOMElement.innerHTML += boxStringFizzBuzz
 
    } else if (fizz === 0 && buzz != 0) {
        // console.log("Fizz")
        gridDOMElement.innerHTML += boxStringFizz;

    } else if (buzz === 0 && fizz != 0) {
        // console.log("Buzz")
        gridDOMElement.innerHTML += boxStringBuzz;

    } else {
        // console.log(i)
        gridDOMElement.innerHTML += boxStringStandard;
    }
}