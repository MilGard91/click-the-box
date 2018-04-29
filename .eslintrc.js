module.exports = {
    "parser": "babel-eslint",
    "env" : { "browser": true },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules":{
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
        "max-len": 0,
        "no-plusplus": 0,
        "react/no-array-index-key": 0,
        "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
      }
};