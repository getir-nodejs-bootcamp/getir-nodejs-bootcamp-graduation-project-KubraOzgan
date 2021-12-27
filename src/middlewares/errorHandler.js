module.exports = (error, req, res, next) => { //Handling error
    console.log("Error middleware worked.");
    res.status(error.status || 500); //If an application-related error occurs, give 500.
    res.json({
        code: error.code || -1,
        msg : error.message || "Internal Server Error!",
      
    });
  };