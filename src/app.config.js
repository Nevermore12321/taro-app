// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/memo/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NeverMore',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7f8389',
    selectedColor: '#5495e6',
    borderStyle: 'black',
    backgroundColor: '#fff',
  }
})
