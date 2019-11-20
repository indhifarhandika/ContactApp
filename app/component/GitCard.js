import React, { Component } from 'react'
import { CardItem, Text, Icon, Right } from 'native-base'
import {View} from 'react-native'
import { TouchableOpacity } from 'react-native'

const GitCard = props => {
    console.log(props.navigation.getParam('datas'))
    const data = props.navigation.getParam('datas')
    return (
        // <Card style={{borderRadius: 10, backgroundColor: 'transparent'}}>
            <View style={{backgroundColor: 'rgba(249, 249, 255, 0.6)', borderRadius: 10, marginTop: 10, width: 390, marginLeft: 10}}>
                <Text style={{color: '#00600f'}}>Nama : {data.name}{'\n'}</Text>
                <Text style={{color: '#00600f'}}>Username : {data.login}{'\n'}</Text>
                <Text style={{color: '#00600f'}}>Total repo : {data.public_repos}</Text>
            </View>
        // </Card>
    )
}

export default GitCard