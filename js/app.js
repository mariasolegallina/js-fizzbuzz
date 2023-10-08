for (let i = 1; i < 101; i++) {
    const fizz = i % 3
    const buzz = i % 5
    
    if (fizz === 0 && buzz === 0) {
        console.log("FizzBuzz", i)
    } else if (fizz === 0 && buzz != 0) {
        console.log("Fizz", i)
    } else if (buzz === 0 && fizz != 0) {
        console.log("Buzz", i)
    }
}