const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `route not found - the request with the method ${req.method} to the route ${req.url} was not found on the server `
    })
}

export default not_found_handler