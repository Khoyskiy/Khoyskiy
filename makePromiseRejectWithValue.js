/**
 * 
 * Should return promise with error
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
    return Promise.reject(Error("<BOO!>"));
}
makePromiseRejectWithBoo()
.catch((error) =>{
  console.log(error)
});
