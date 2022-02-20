
function* generator() {
    yield 's';
    yield 'c';
    yield 'p';
    yield 't';
    yield 'i';

}


const str = generator();

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next().value);

// will take number 2

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);