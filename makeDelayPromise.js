/**
 * 
 * Should return a promise that resolves with the value after delayInMs
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
   return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(value);
        }, delayInMs);
    });
};

console.log(makeDelayPromise("test", 3000)
.then(res =>console.log(res)))
