const handleForbidden = (req, res, next) => {
    return res.status(403).json({
        success: false,
        message: `Forbidden - the request with the method ${req.method} to the route ${req.url} is not allowed`
    })
};

export default handleForbidden;
