const handleTooManyRequests = (req, res, next) => {
    return res.status(429).json({
        success: false,
        message: `Too Many Requests - the request with the method ${req.method} to the route ${req.url} is being rate limited`
    })
};

export default handleTooManyRequests;
