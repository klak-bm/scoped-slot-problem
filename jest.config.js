module.exports = {
    "verbose": true,
    "moduleFileExtensions": [
        "js",
        "json",
        "vue"
    ],
    "transform": {
        "^.+\\.js$": "babel-jest",
        ".*\\.(vue)$": "vue-jest"
    },
    "transformIgnorePatterns": [
        "/node_modules/(?!bootstrap-vue)"
    ]
};