import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const CameraModule = ({ navigation }) => {

  //used ref of camera
  const [{ cameraRef }, { takePicture }] = useCamera(null);

  //function to capture document image
  const capture = async () => {
    const image = await takePicture();
    const path = image.uri
    console.log(path);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1, justifyContent: 'flex-end' }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        <View style={{ alignItems: 'center', bottom: '10%' }}>
          <TouchableOpacity onPress={() => capture()} style={styles.scanButton}>
            <Text style={{ color: 'white' }} >Scan your Document</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </SafeAreaView>
  )
}

export default CameraModule;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  scanButton: {
    padding: 12, borderRadius: 12, backgroundColor: '#1296B0'
  },
})