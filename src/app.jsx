import {Component} from "react"
import {Provider} from "mobx-react"
import Taro from "@tarojs/taro";

import counterStore from "./store/counter"

import "./app.scss"
import "@/assets/font-awesome/css/font-awesome.min.css"

const store = {
    counterStore
}

class App extends Component {
    componentDidMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    // this.props.children 就是要渲染的页面
    render() {
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default App
