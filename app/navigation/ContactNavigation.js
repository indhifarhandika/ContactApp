import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import ContactView from '../screen/ContactView'
import AxiosApiScreen from '../screen/AxiosApiScreen'

const ProductNavigator = createStackNavigator({
    Home: HomeScreen,
    ContactList: ContactView,
    ApiGithub: AxiosApiScreen
},{
    transparentCard: true
})

export default ProductNavigator