import React, { useState } from 'react'
import { View, Text, Button, TextInput, Keyboard, FlatList, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import axios from 'axios'

const AxiosApiScreen = event => {
    const dft = {
        name: ""
    }

    const [nama, setNama] = useState('')
    const [data, setData] = useState(dft)
    const [repos, setRepos] = useState()

    const getUser = props => {
        axios.get('https://api.github.com/users/'+ props.toLowerCase()).then((res) => {
            setData(res.data)
        })
        axios.get('https://api.github.com/users/'+ props.toLowerCase()+'/repos').then((res) => {
            setRepos(res.data)
        })
        Keyboard.dismiss()
        console.log(data)
        console.log(repos)
        event.navigation.navigate('Git', {datas: data})
    }
    return (
        <ImageBackground source={ require('../../assets/bg2.jpg')} style={styles.container}>
            <View style={styles.input}>
                <TextInput
                    style={{color: 'white'}}
                    placeholder="username"
                    placeholderTextColor="white"
                    value={nama}
                    onChangeText={data => setNama(data)}
                />
            </View>
            <Button 
                onPress = {() => {
                    getUser(nama)
                }}
                title="Cari"
            />
            {/* {data.name === '' ? 
            <Text></Text>
            : 
            <View>
                <Text style={{fontSize: 20}}>Nama : {data.name}</Text>
                <Text style={{fontSize: 20}}>Username : {data.login}</Text>
                <Text style={{fontSize: 20}}>Total Repo : {data.public_repos}</Text>
                <Text style={{fontSize: 20}}>Followers : {data.followers}</Text>
                <Text style={{fontSize: 20}}>Following : {data.following}</Text>
                {
                    data.bio === null ?
                        <Text></Text>
                    :
                        <Text style={{fontSize: 20}}>Bio : {data.bio}</Text>
                }
                <View >
                    <FlatList
                        data={repos}
                        keyExtractor={item => item.id}
                        renderItem={data => (
                            <View>
                                <Text>{data.item.name}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
            } */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        width: '90%',
        marginLeft: 20,
        marginVertical: 5,
        height: 40,
        
    },
    button: {
        flexDirection: 'row',
        marginTop: 20
    }
})

AxiosApiScreen.navigationOptions = {
    title: "GitHub"
}

export default AxiosApiScreen