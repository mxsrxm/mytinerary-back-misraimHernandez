const handleUnauthorized = (req, res, next) => {
    return res.status(401).json({
        success: false,
        message: `Unauthorized - the request with the method ${req.method} to the route ${req.url} requires authentication`
    })
};

export default handleUnauthorized;