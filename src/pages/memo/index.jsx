import {Component} from 'react'
import {View,} from '@tarojs/components'
import {observer, inject} from 'mobx-react'

import Segment from "@/components/segment/index";

import './index.scss'



@inject('store')
@observer
class Index extends Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }


    render() {
        return (
            <View className="content">
                <Segment />
            </View>
        )
    }
}

export default Index
