import React, { Component } from 'react'
import { Text, View } from 'react-native'
import InputNumber from './InputNumber'
import QRscaner from './QRscaner'
import Home from './Home'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'

export class Navigation extends Component {
    state={
        phoneNo:'',
        code:'',
        type:'',
        date:new Date().toDateString()
    }
    setPhoneNo = (e)=>{
        this.setState({phoneNo:e})
    }
    setCode = (e,t)=>{
        this.setState({code:e,type:t})
        // this.setState({})
        setTimeout(() => {
            let obj={
                code:this.state.code,
                type:this.state.type,
                date:new Date().toDateString()
            }
            firebase.database().ref(this.state.phoneNo).set(obj)
        }, 500);
    }
    render() {
        console.log(this.state.phoneNo,this.state.code,'n000000000000000')
        const Stack = createStackNavigator();
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="InputNumber" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="QRscaner">
                    {props => <QRscaner {...props} setCode={this.setCode} />}
                    </Stack.Screen>
                    <Stack.Screen name="Home">
                    {props => <Home {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="InputNumber">
                    {props => <InputNumber {...props} setPhoneNo={this.setPhoneNo} />}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation
