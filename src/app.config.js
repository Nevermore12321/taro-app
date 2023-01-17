// eslint-disable-next-line no-undef
export default defineAppConfig({
    pages: [
        'pages/index/index',
        'pages/memo/index',
        'pages/login/index'
    ],
    window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'NeverMore',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        color: '#8a8a8a',
        selectedColor: '#2d8cf0',
        borderStyle: 'white',
        backgroundColor: '#fff',
        // darkmode: false,
        list: [
            {
                pagePath: 'pages/index/index',
                iconPath: 'assets/images/home.png',
                selectedIconPath: 'assets/images/selectedHome.png',
                text: '首页',
            },
            {
                pagePath: 'pages/memo/index',
                iconPath: 'assets/images/memo.png',
                selectedIconPath: 'assets/images/selectedMemo.png',
                text: '备忘',
            },
        ],
    }
})
