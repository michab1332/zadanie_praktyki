var path = require("path")

module.exports = {
    entry: './App.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'scripts/bundle.js'
    },
    mode: 'development'
}