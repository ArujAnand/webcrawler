const {sortPages} = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages small', () => {
    const input = {
        'https://blogs.nasa.gov/': 1,
        'https://boot.dev': 2
    }

    const actual = sortPages(input)
    const expected = [
        ['https://boot.dev', 2],
        ['https://blogs.nasa.gov/', 1]
    ]

    expect(actual).toEqual(expected)
})

test('sortPages large', () => {
    const input = {
        'https://github.com':1,
        'https://google.com': 4,
        'https://blogs.nasa.gov/': 3,
        'https://boot.dev': 2
    }

    const actual = sortPages(input)
    const expected = [
        ['https://google.com', 4],
        ['https://blogs.nasa.gov/', 3],
        ['https://boot.dev', 2],
        ['https://github.com', 1]
    ]

    expect(actual).toEqual(expected)
})