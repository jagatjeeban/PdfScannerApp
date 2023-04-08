import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={{flexDirection:'column', justifyContent:"space-around", flex:1}}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 30, fontWeight:500 }}>Doc to Pdf Converter</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => alert('Scan your document here')} style={styles.scanButton}>
            <Text style={{ color: 'white' }} >Scan your Document</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  scanButton: {
    padding: 12, borderRadius: 12, backgroundColor: '#1296B0'
  },
});

export default Home;
