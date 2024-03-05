window.promises = [];

// Function to generate a promise that resolves after a random time between 1 and 5 seconds
function generatePromise() {
    return new Promise(resolve => {
        const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1000 and 5000 milliseconds (1 to 5 seconds)
        setTimeout(() => {
            resolve(randomTime);
        }, randomTime);
    });
}

// Create an array of five promises
for (let i = 0; i < 5; i++) {
    window.promises.push(generatePromise());
}

// Using Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
    .then(result => {
        // Print the result in the output div
        document.getElementById('output').innerText = `Resolved after ${result} milliseconds.`;
    })
    .catch(error => {
        // Handle errors if any
        console.error(error);
    });
