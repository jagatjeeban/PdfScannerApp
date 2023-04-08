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

import { Colors } from 'react-native/Libraries/NewAppScreen';

const CameraModule = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.safeAreaView}>

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