import React, { Component } from 'react'
import { Text, View ,StyleSheet ,TouchableOpacity ,Dimensions,ImageBackground,Image,StatusBar ,} from 'react-native'
import PhoneInput from 'react-native-phone-input'

export default class InputNumber extends Component {
    state = {
        valid: "",
        type: "",
        value: ""
      }
      renderInfo=()=> {
        if (this.state.value) {
          return (
            
            <View style={styles.info}>
              <Text>
                Is Valid:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {this.state.valid.toString()}
                </Text>
              </Text>
              <Text>
                Type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
              </Text>
              <Text>
                Value:{" "}
                <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
              </Text>
            </View>
           
          );
        }
      }
      updateInfo=()=> {
        this.setState({
          valid: this.phone.isValidNumber(),
          type: this.phone.getNumberType(),
          value: this.phone.getValue()
        });
        if(this.phone.isValidNumber()){
            this.props.setPhoneNo(this.phone.getValue())
            this.props.navigation.navigate('QRscaner')
            this.setState({
              valid: '',
              type: '',
              value: ''
            });
        }
      }
    render() {
        return (
          <ImageBackground
              source={require('../assets/background.jpeg')}
              style={styles.bg}
            >
              <StatusBar hidden={true}/>
            <View style={styles.container}>
                <Text style={{fontSize:30}}> Gastro-Track </Text>
                {/* <Image
                  style={styles.tinyLogo}
                  source={require('../assets/logo.png')}
                /> */}
                <View style={{marginLeft:70,width:'90%'}}>
                    <PhoneInput
                        autoFormat={true}
                        allowZeroAfterCountryCode={false}
                        textProps={{placeholder: 'Enter phone number'}}
                        textStyle={{fontSize:18}}
                        ref={ref => {
                            this.phone = ref;
                        }}
                        initialCountry="ch"
                    />
                </View>
                    {/* {this.renderInfo()} */}
                <TouchableOpacity onPress={this.updateInfo} style={styles.button}>
                <Text style={{textAlign:'center'}}>Next</Text>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
        )
    }
}
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        // backgroundColor:'skyblue'
    },
     info: {
        // width: 200,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
        padding: 10,
        marginTop: 20
      },
      button: {
        padding: 10,
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:20,
        width:'50%',
        justifyContent:'center',
        marginBottom:20
      },
      bg:{
        height:DIMENSION_HEIGHT,
        width:DIMENSION_WIDTH,
        resizeMode: "cover",
    
      },
      tinyLogo:{
          // height:100,
          // width:100,
          marginTop:25
      }
})