import React, { Component } from 'react'
import { Text, StyleSheet, View ,ImageBackground ,StatusBar,Dimensions} from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <ImageBackground
              source={require('../assets/background.jpeg')}
              style={styles.bg}
            >
            <StatusBar hidden={true}/>
            <View styles={[styles.container]}>
                <View style={{alignSelf:'center',justifyContent:'center',height:400}}>

                    <Text style={{fontSize:35}}> Wellcome! </Text>
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
        resizeMode: "cover",}
})
