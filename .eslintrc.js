// eslint-disable-next-line import/no-commonjs
module.exports = {
    "extends": ["taro/react"],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": ["error", {"varsIgnorePattern": "Taro|wx"}],
        "no-mixed-spaces-and-tabs": 2, // 禁止空格和 tab 的混合缩进
        "no-debugger": 2, //禁止有debugger
        "react/jsx-indent-props": 'off',
        "space-infix-ops": 2, // 要求操作符周围有空格
        "space-before-blocks": 2, // 要求语句块之前有空格
        "indent": ["error", 4, {"SwitchCase": 1}],
        "jsx-quotes": ["error", "prefer-double"], // JSX属性使用双引号
        "import/first": 0 // 消除绝对路径必须要在相对路径前引入的问题
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "legacyDecorators": true, // 允许使用修饰符
            "globalReturn": false // 设置为 true，当 sourceType 为 script 时，允许全局 return
        },
        "requireConfigFile": true, // 是否需要 babel 配置文件
        "allowImportExportEverywhere": false // 设置为 true，import 和 export 声明 可以出现在文件的任务位置，否则只能出现在顶部
    }
}
