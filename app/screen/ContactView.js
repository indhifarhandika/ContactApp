import React from 'react'
import { FlatList, StyleSheet, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import MyCart from '../component/MyCard'

const ContactView = props => {
    const contactV = useSelector(state => state.contact)

    const dispatch = useDispatch()
    return (
        <ImageBackground source={require('../../assets/bg2.jpg')} style={styles.container}>
            <FlatList
                data={contactV}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <MyCart text={itemData.item.name} />
                )}
            />
        </ImageBackground>
    )
}

ContactView.navigationOptions = {
    title: "Contact List",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})

export default ContactView