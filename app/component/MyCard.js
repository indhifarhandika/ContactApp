import React, { Component } from 'react'
import { Card, CardItem, Text, Icon, Right } from 'native-base'
import { TouchableOpacity, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { removeContact } from '../store/actions/contactActions'

const MyCard = props => {
    const data = useSelector(state => state.contact)
    console.log(data)

    const _Bt = id => {
        const member = data.find(par => par.name === id)
        Alert.alert(
            'Contact Info',
            'Nomor : ' + member.phone,
            [
                {
                    text: 'Oke'
                }
            ]
        )
    }

    const dispatch = useDispatch()
    const _Del = nama => {
        const member = data.find(par => par.name === nama)
        Alert.alert(
            'Hapus Contact',
            'Apakah anda yakin ingin menghapus ' + member.name + ' dari contact anda ?',
            [
                {
                    text: 'Iya', 
                    onPress: () => dispatch(
                                        removeContact(member.id)
                                    )
                },
                {
                    text: 'Tidak'
                }
            ]
        )
        
    }

    return (
        // <Card style={{borderRadius: 10, backgroundColor: 'transparent'}}>
            <CardItem style={{backgroundColor: 'rgba(249, 249, 255, 0.6)', borderRadius: 10, marginTop: 10, width: 390, marginLeft: 10}}>
                <Text style={{color: '#00600f'}}>{props.text}</Text>
                <Right style={{ flex: 1 }}>
                    <TouchableOpacity onPress={ () => _Bt(props.text) } >
                        <Icon name="arrow-forward" style={{color: '#005005'}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => _Del(props.text) } >
                        <Icon name="trash" style={{color: '#1c313a'}} />
                    </TouchableOpacity>
                </Right>
            </CardItem>
        // </Card>
    )
}

export default MyCard