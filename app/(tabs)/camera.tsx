import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import PhotoPreviewSection from "../../components/camera/PhotoPreviewSection";
import PhotoPickerSection from "../../components/camera/PhotoPickerSection";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Camera() {
  const router = useRouter();
  const cameraRef = useRef<CameraView | null>(null);

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null); // Quản lý ảnh chụp
  const [image, setImage] = useState(null); // Quản lý ảnh từ thư viện

  // Kiểm tra quyền truy cập camera khi khởi động
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const phone = await AsyncStorage.getItem("phone");
        if (!phone) router.replace("/login");
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    };
    checkLoginStatus();
  }, [router]);

  if (!permission) return <View />; // Chưa load xong quyền truy cập camera
  if (!permission.granted)
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );

  // Hàm đổi hướng camera
  const toggleCameraFacing = () => setFacing((prev) => (prev === "back" ? "front" : "back"));

  // Hàm chụp ảnh
  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 1, base64: true };
        const photoTaken = await cameraRef.current.takePictureAsync(options);
        setPhoto(photoTaken);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    }
  };

  // Hàm chọn ảnh từ thư viện
  const handleGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
      });

      if (!result.canceled) setImage(result.assets[0]);
    } catch (error) {
      console.error("Error accessing media library:", error);
    }
  };

  // Hàm làm lại hoặc reset ảnh
  const handleRetakePhoto = () => setPhoto(null);
  const handleRepickPhoto = () => setImage(null);

  // Giao diện khi đã chụp hoặc chọn ảnh
  if (photo)
    return <PhotoPreviewSection photo={photo} handleRetakePhoto={handleRetakePhoto} />;
  if (image)
    return <PhotoPickerSection photo={image} handleRetakePhoto={handleRepickPhoto} />;

  // Giao diện camera chính
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        {/* Điểm đỏ giữa màn hình */}
        <Entypo name="star" size={40} color="red" style={styles.redPoint} />
        <View style={styles.boundingBox} />
        <View style={styles.buttonContainer}>
          {/* Nút mở thư viện ảnh */}
          <TouchableOpacity style={styles.button} onPress={handleGallery}>
            <Ionicons name="image-outline" size={44} color="black" />
          </TouchableOpacity>
          {/* Nút đổi hướng camera */}
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <AntDesign name="retweet" size={44} color="black" />
          </TouchableOpacity>
          {/* Nút chụp ảnh */}
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
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  redPoint: {
    position: "absolute",
    top: "37%",
    left: "45%",
  },
  boundingBox: {
    position: "absolute",
    top: "5%",
    left: "10%",
    width: "80%",
    height: "70%",
    borderWidth: 5,
    borderColor: "gray",
    borderRadius: 20,
    backgroundColor: "transparent",
  },
});
