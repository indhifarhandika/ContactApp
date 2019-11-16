import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import ContactView from '../screen/ContactView'

const ProductNavigator = createStackNavigator({
    Home: HomeScreen,
    ContactList: ContactView
},{
    transparentCard: true
})

export default ProductNavigator