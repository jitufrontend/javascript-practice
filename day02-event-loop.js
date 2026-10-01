//micro and macro task queue

//macrotask pririty low
setTimeout(() => {
    console.log("Hello Macro Task");
}, 1000);



//microtask pririty high

let data = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise Success");
    } else {
        reject("Promise Failed");
    }
});

data
    .then((result) => {
        console.log("run:", result);
    })
    .catch((error) => {
        console.log("error:", error);
    });




