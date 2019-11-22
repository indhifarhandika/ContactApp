import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import ContactView from '../screen/ContactView'
import AxiosApiScreen from '../screen/AxiosApiScreen'
import GitCard from '../component/GitCard'
import AsyncScreen from '../screen/AsyncScreen'

const ProductNavigator = createStackNavigator({
    Home: HomeScreen,
    ContactList: ContactView,
    ApiGithub: AxiosApiScreen,
    Git: GitCard,
    AsyncScreen: AsyncScreen
},{
    initialRouteName: 'Home'
},{
    transparentCard: true
})

export default ProductNavigator