import Taro from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AtInput, AtForm} from "taro-ui";

import LogoImage from "@/assets/images/logo/logo_with_words.png"

import "./index.scss"
import {useState} from "react";

const Login = () => {

    const [current, setCurrent] = useState(0)
    const [token, setToken] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSwitch = (value) => {
        setCurrent(value)
    }

    const handleTokenChange = (value) => {
        console.log(value)
        setToken(value)
        return value
    }

    const handleUsernameChange = (value) => {
        console.log(value)
        setUsername(value)
        return value
    }

    const handlePasswordChange = (value) => {
        console.log(value)
        setPassword(value)
        return value
    }

    return (
        <View className="content">
            <View className="logo_bg">
                <Image
                    mode="aspectFit"
                    className="logo"
                    src={LogoImage}
                />
            </View>
            <View className="login_content">
                <View className="switch_view">
                    <View className={current === 0 ? "selected_title" : "normal_title"} onClick={() => handleSwitch(0)}>
                        Token
                    </View>
                    <View className={current === 1 ? "selected_title" : "normal_title"} onClick={() => handleSwitch(1)}>
                        Account
                    </View>
                </View>
                {
                    current === 0 ?
                        <View className="input_view">
                            <AtForm>
                                <AtInput
                                    name="token"
                                    title="Token:"
                                    type="text"
                                    placeholder="please input token"
                                    value={token}
                                    onChange={(value) => handleTokenChange(value)}
                                />
                            </AtForm>
                        </View>
                        :
                        <View className="input_view">
                            <AtForm>
                                <AtInput
                                    className="input_bar"
                                    name="username"
                                    title="Username:"
                                    type="text"
                                    placeholder="please input username"
                                    value={username}
                                    onChange={(value) => handleUsernameChange(value)}
                                />
                                <AtInput
                                    className="input_bar"
                                    name="password"
                                    title="Password:"
                                    type="password"
                                    placeholder="please input password"
                                    value={password}
                                    onChange={(value) => handlePasswordChange(value)}
                                />
                            </AtForm>
                        </View>

                }
            </View>
        </View>
    )
}

export default Login
