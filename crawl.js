function normaliseURL (urlString) {
    const urlObj = new URL(urlString)  //using the built-in url constructor
    const hostPath =  `${urlObj.hostname}${urlObj.pathname}`

    //removing trailing slashes
    if (hostPath.length > 0 && hostPath.slice(-1) === '/' ) {
        return hostPath.slice(0,-1)
    }

    return hostPath
}

module.exports = {
    normaliseURL
}