const { JSDOM } = require('jsdom')

//getting URL from the webpage using JSDOM module
function getURLsFromHTML(htmlBody, baseURL) {
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')

    const urls = []
    for (const linkElement of linkElements) {
        if (linkElement.href.slice(0,1) === '/') {
            //relative url
            try {
                const urlObj = new URL(`${baseURL}${linkElement.href}`)
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with relative url: ${err.message}`)
            }
        } else {
            //absolute url
            try {
                const urlObj = new URL(linkElement.href)
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with relative url: ${err.message}`)
            }
        }
    }
    return urls
}

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
    normaliseURL,
    getURLsFromHTML
}