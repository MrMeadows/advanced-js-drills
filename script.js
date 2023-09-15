setName();

function setName() {
    var name = 'Sebastian';
    console.log(name);
}

console.log('assign values to be averaged');
let avgNums = average(10, 20);

console.log('create average function: ', avgNums);
function average(arg1, arg2) {
    console.log('intake and compute average function')
    let avg = (arg1 + arg2) / 2
    return avg;
}

let fruits = ['apple', 'cucumber', 'cherry'];

//let favFruit;

function printFruit() {
    console.log(fruits[0]);
    let favFruit = fruits[2];

    function printFavFruit() {
        console.log(favFruit);
        let leastFav = 'guava';
    }
    printFavFruit()
    //console.log(leastFav);
}

printFruit()

turboDox()
function turboDox() {
    console.log('hello what is your address please');
}

let anotherFunction = function() {
    alert('I am so tired');
}

anotherFunction()
