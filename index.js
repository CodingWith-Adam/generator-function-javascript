function* greeting(name){
    yield "Hello"
    yield "How are you?"
    yield name
}

const greet = greeting("Adam");

console.log(greet.next().value)
console.log(greet.next().value)
console.log(greet.next().value)

const greet2 = greeting('Adam')
for(text of greet2){
    console.log(text)
}

function* getNumber(num){
    while(true){
        yield num++;
    }
}

const getNum = getNumber(10);

console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)

for(let i=0; i < 10; i++){
    console.log(getNum.next().value)
}