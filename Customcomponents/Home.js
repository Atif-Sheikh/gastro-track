import React, { Component } from 'react'
import { Text, StyleSheet, View ,ImageBackground ,StatusBar,Dimensions} from 'react-native'

export default class Home extends Component {

    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate('InputNumber')
        }, 2000);
    }

    render() {
        return (
            <ImageBackground
              source={require('../assets/background.jpeg')}
              style={styles.bg}
            >
            <StatusBar hidden={true}/>
            <View styles={[styles.container]}>
                <View style={{alignSelf:'center',justifyContent:'center',height:400, alignItems: "center"}}>

                    <Text style={{fontSize:35}}> Welcome! </Text>
                    <Text style={{fontSize: 14, marginTop: 20, padding: 30}}>
                        Danke für die Registrierung. Sollte innerhalb der nächsten 14 Tage ein Verdacht auftreten werden Sie unter der angegebenen Nummer benachrichtigt.
                    </Text>
                </View>
            </View>
            </ImageBackground>
        )
    }
}
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    },
    bg:{
        height:DIMENSION_HEIGHT,
        width:DIMENSION_WIDTH,
        resizeMode: "cover",
    }
})
