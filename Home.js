import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import DocumentScanner from 'react-native-document-scanner';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import RNFS from 'react-native-fs';

const Home = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //function to create pdf from the image
  const createPDF = async (image) => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = await PDFPage.create().setImage(image);
      pdfDoc.addPage(page);
      const pdfPath = `${RNFS.DocumentDirectoryPath}/doc.pdf`;
      await RNFS.writeFile(pdfPath, await pdfDoc.save());
      RNFS.readFile(pdfPath, 'base64').then((base64) => {
        const pdfUrl = `data:application/pdf;base64,${base64}`;
        // Navigate to a new screen with the PDF viewer component
        console.log(pdfUrl);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <DocumentScanner
        useBase64={true}
        captureMultiple={false}
        quality={0.5}
        onPictureTaken={(image) => {
          this.createPDF(image);
        }}
        overlayColor="rgba(255,130,0, 0.7)"
        enableTorch={false}
        brightness={0.3}
        saturation={0.3}
        contrast={0.3}
        detectionCountBeforeCapture={5}
        detectionRefreshRateInMS={50}
        style={styles.documentScanner}
      />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  scanButton: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#1296B0',
  },
  documentScanner: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
