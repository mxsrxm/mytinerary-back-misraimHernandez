const bad_request_handler = (error, req, res, next) => {
    if (error.status === 400) {  
        return res.status(400).json({
            success: false,
            response: error.message || 'Bad request error',
            message: `Bad request - the request with the method ${req.method} to the route ${req.url} contains invalid data or parameters`
        });
    }
    next(error); 
};

export default bad_request_handler;
