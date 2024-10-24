const handleRequestTimeout = (req, res, next) => {
    return res.status(408).json({
        success: false,
        message: `Request Timeout - the request with the method ${req.method} to the route ${req.url} took too long to process`
    })
};

export default handleRequestTimeout;