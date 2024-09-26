const start = "start!";

const promise1 = new Promise((resolve, reject, par) => {
    for (i=0; i < 5; i++) {
        console.log(i+start);
    };
    resolve(par);

});

promise1.then(() => {
    console.log(22);
});

console.log("promise ended!")

console.log("timeout started(no)!")

setTimeout(() => {
    console.log("timeout")
}, 2000);

