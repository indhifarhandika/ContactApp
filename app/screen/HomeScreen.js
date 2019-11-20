import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground ,Image, Platform, Keyboard, KeyboardAvoidingView} from 'react-native'
import { useDispatch } from 'react-redux'

import { addContact } from '../store/actions/contactActions'

const HomeScreen = props => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch()

    return (
        <ImageBackground source={ require('../../assets/bg2.jpg')} style={styles.container}>
            <View>
                <Image source={require('../../assets/react.png')} style={{width: 90, height: 90, marginBottom: 50, marginTop: 140}} />
            </View>
            <View style={styles.input}>
                <TextInput
                    style={{color: 'white'}}
                    placeholderTextColor='#ffffff'
                    placeholder="Nama"
                    value={name}
                    onChangeText={data => setName(data)}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    style={{color: 'white'}}
                    keyboardType='numeric'
                    placeholderTextColor='#ffffff'
                    placeholder="Nomor Telepon"
                    value={phone}
                    onChangeText={data => setPhone(data)}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={{marginLeft: 20, borderWidth: 1, borderColor: 'white', borderRadius: 10, width: 70, alignItems: 'center'}}
                    onPress={() => (
                        dispatch(
                            addContact(
                                {
                                    name: name,
                                    phone: phone
                                }
                            )
                        ),
                        Keyboard.dismiss(),
                        alert('Contact berhasil ditambahkan'),
                        setName(''),
                        setPhone('')
                    )}
                >
                    <Text style={{fontSize: 16, color: 'white'}}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginHorizontal: 10, borderWidth: 1, borderColor: 'white', borderRadius: 10, width: 130, alignItems: 'center' }}
                    onPress={() => props.navigation.navigate('ContactList')}
                >
                    <Text style={{fontSize: 16, color: 'white'}}>Contact List</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderWidth: 1, borderColor: 'white', borderRadius: 10, width: 130, alignItems: 'center' }}
                    onPress={() => props.navigation.navigate('ApiGithub')}
                >
                    <Text style={{fontSize: 16, color: 'white'}}>API Github</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        width: 250,
        marginVertical: 5,
        height: 40
    },
    button: {
        flexDirection: 'row',
        marginTop: 20
    }
})

HomeScreen.navigationOptions = {
    header: null
}

export default HomeScreen