/**
 * 
 * the promise should resolve or reject depending on itShouldResolve value
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
    return new Promise((resolve,reject) => {
        if(itShouldResolve){
            resolve("done");
        }
        reject(new Error("False"));
    });
}

makePromiseWithConstructor(false)
.then(() =>{
    console.log("Resolve");
})
.catch(() =>{
    console.log("Reject")
});

