const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
cats.push(name);}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
} 

function destructivelyRemoveFirstCat() {
    cats.shift();
} 

function appendCat(name) {
    const newarry = [...cats, name];
    return newarry;
}

function prependCat(name) {
    const newarry = [name, ...cats];
    return newarry;
}

function removeLastCat() {
    const newarry = cats.slice(0, 2);
    return newarry;
}

function removeFirstCat() {
    const newarry = cats.slice(1);
    return newarry;
}