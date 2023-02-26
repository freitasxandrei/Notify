import React, {Component} from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
} from 'react-native';
//Navigation import
import {notificationManager} from './components/NotificationHandler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './components/Index';
import ScreenDestiny from './components/ScreenDestiny';

const Stack = createStackNavigator();
const notificador = notificationManager;

  export default class App extends Component {
    constructor(props) {
      super(props)
    }
  
    componentDidMount() {
      notificador.configurar()
    }
  
    disparar = () => {
      notificador.showNotification(
        1,
        "Seja bem-vindo!",
        "Cheque nosso site!",
        {}, // data
        {} // options
      )
    }
  
    cancelar = () => {
      notificador.cancelAllLocalNotification()
    }

    agendar = () => {
      notificador.agendarNotificacao()
    }
  
    render() {
    
      return(
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="Início">
              {
                ({navigation}) => {notificador.setNavegador(navigation); 
                return(<Index navegador={navigation} enviarNotificacao={this.disparar} cancelar={this.cancelar} agendar={this.agendar}/>)}
              }
            </Stack.Screen>
  
            <Stack.Screen name="ScreenDestiny">
              {({navigation}) => {return(<ScreenDestiny navegador={navigation} />)}}
            </Stack.Screen>
  
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});