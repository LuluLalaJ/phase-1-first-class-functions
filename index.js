function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction() {
    const namedFunction = name => console.log(name);
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    // return function(name) {console.log(name)}
    return name => console.log(name);
}