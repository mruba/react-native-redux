import { StackNavigator } from 'react-navigation'
import ProductsScreen from '../Containers/ProductsScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProductsScreen: { screen: ProductsScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ProductsScreen',
  navigationOptions: {
    header: {
      style: styles.header
    }
  }
})

export default PrimaryNav
