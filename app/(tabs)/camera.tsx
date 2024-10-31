import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import PhotoPreviewSection from '../../components/camera/PhotoPreviewSection';

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takedPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takedPhoto);
    }
  };

  const handleRetakePhoto = () => setPhoto(null);

  if (photo) return <PhotoPreviewSection photo={photo} handleRetakePhoto={handleRetakePhoto} />;

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        {/* Red point overlay */}
        <Entypo name='star' size={40} color={"red"} style={styles.redPoint} />

        <View style={styles.boundingBox} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <AntDesign name="retweet" size={44} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
            <AntDesign name="camera" size={44} color="black" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100, // Moves the button container 30 units above the bottom
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  redPoint: {
    position: 'absolute',
    top: '37%',
    left: '45%',
    // width: 10,
    // height: 10,
    // borderRadius: 5,
    // backgroundColor: 'red',
    // transform: [{ translateX: -5 }, { translateY: -5 }],
  },
  boundingBox: {
    position: 'absolute',
    top: '5%',
    left: '10%',
    width: '80%',
    height: '70%',
    borderWidth: 5,
    borderColor: 'gray',
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
});
