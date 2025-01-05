const { normaliseURL } = require('./crawl.js')

// importing functions from jest
const { test, expect } = require('@jest/globals')

test('normaliseURL strip protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normaliseURL strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normaliseURL capitals', () => {           //url constructor lowercases the url for us
    const input = 'https://Blog.BOOT.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normaliseURL strip http', () => {
    const input = 'http://blog.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})