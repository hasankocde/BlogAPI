"use strict"
/*

BLOG api project errorHandler

*/
module.exports = (err, req, res, next) => {
    // defaul olarak statuscode var
    const errorStatusCode = res.errorStatusCode ?? 500
    // console.log(‘errorHandler runned.’)
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}