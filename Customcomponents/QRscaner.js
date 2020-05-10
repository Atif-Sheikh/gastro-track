import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Platform,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class ScanScreen extends Component {
  onSuccess = e => {
      console.log(e.data,e.type)
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    this.props.setCode(e.data,e.type)
    this.props.navigation.navigate('Home')
  };

  render() {

    let checkAndroidPermission = true
    if (Platform.OS === 'android' && Platform.Version < 23) {
      checkAndroidPermission = false
    }


    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        cameraProps={{ captureAudio: false }}
        flashMode={RNCamera.Constants.FlashMode.auto}
        checkAndroid6Permissions={checkAndroidPermission}
        // topContent={
        //   <Text style={styles.centerText}>
        //     Go to{' '}
        //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        //     your computer and scan the QR code.
        //   </Text>
        // }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
export default ScanScreen
// AppRegistry.registerComponent('default', () => ScanScreen);