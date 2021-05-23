var url="https://logger.io/log"

const log = function(message){
    console.log(message);
}

// Exporting an object or function from this module so that is can be use in other module
// module.exports.log = log;  //common method to export object 
// module.exports.endpoint = url;  //common method to export object   
module.exports = log;  // anotehr way if we have only one object to export 