import React from 'react'
import { View, Text, Button, AsyncStorage, TextInput } from 'react-native'

export default class AsyncScreen extends React.Component{
    state = {
        key: '',
        nama: ''
    }
    _storeData = async (props) => {
        try {
            await AsyncStorage.setItem(props.key, props.nama)
        } catch (error) {
            console.log(error)
        }
    }

    _retriveData = async (ret) => {
        try {
            const value = await AsyncStorage.getItem(ret)
            if (value !== null) {
                console.log(value)
            }else{
                console.log("Data Not Found")
            }
        } catch (error) {
            console.log(error)
        }
    }

    _removeData = async (key) => {
        try {
            const valueId = await AsyncStorage.getItem(key)
            if (valueId !== null) {
                await AsyncStorage.removeItem(key)
                console.log("Hapus key = " + valueId + " Sukses")
            }
        } catch (error) {
            
        }
    }

    _getAllKey = async () => {
        try {
            const data = await AsyncStorage.getAllKeys()
            console.log(data)
        } catch (error) {
            
        }
    }

    _clearKey = async () => {
        try {
            await AsyncStorage.clear()
            console.log("Clear All Data")
        } catch (error) {
            
        }
    }

    render() {
        return (
            <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25}}>Async Storage</Text>
                </View>
                <TextInput 
                    placeholder="key"
                    value={this.state.key}
                    onChangeText={data => this.setState({key: data})}      
                />
                <TextInput 
                    placeholder="Nama"
                    value={this.state.nama}
                    onChangeText={data => this.setState({nama: data})}      
                />
                <Button title="Send Data" onPress={() => this._storeData(this.state)} />
                <Button title="Get Data" onPress={() => this._retriveData(this.state.key)} />
                <Button title="Remove Data" onPress={() => this._removeData(this.state.key)} />
                <Button title="Get All Key" onPress={() => this._getAllKey()} />
                <Button title="Clear Data" onPress={() => this._clearKey()} />
            </View>
        )
    }
}

AsyncScreen.navigationOptions = {
    headerTitle: 'Test'
}