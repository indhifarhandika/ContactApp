import React, { useState } from 'react'
import { View, Text, Button, TextInput, Keyboard } from 'react-native'
import axios from 'axios'

const AxiosApiScreen = () => {
    const dft = {
        name: ""
    }

    const [nama, setNama] = useState('')
    const [data, setData] = useState(dft)

    const getUser = props => {
        axios.get('https://api.github.com/users/'+ props).then((res) => {
            setData(res.data)
        })
        Keyboard.dismiss()
        console.log(data)
    }
    return (
        <View>
            <TextInput
                placeholder="username"
                value={nama}
                onChangeText={data => setNama(data)}
            />
            <Button 
                onPress = {() => getUser(nama)}
                title="Send"
            />
            {data.name === '' ? 
            <Text></Text>
            : 
            <View>
                <Text style={{fontSize: 20}}>Nama         : {data.name}</Text>
                <Text style={{fontSize: 20}}>Username  : {data.login}</Text>
                <Text style={{fontSize: 20}}>Total Repo : {data.public_repos}</Text>
                <Text style={{fontSize: 20}}>Followers   : {data.followers}</Text>
                <Text style={{fontSize: 20}}>Following   : {data.following}</Text>
            </View>
            }
        </View>
    )
}

AxiosApiScreen.navigationOptions = {
    title: "Cek Repository Github"
}

export default AxiosApiScreen