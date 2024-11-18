import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Result() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      {/* <Text style={styles.header}>Kết quả nhận diện</Text> */}

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2Fa_H0CokN31U2vwvRo-XrGLzZEj_M3w6Q&s" }} // Thay bằng link ảnh hoặc require local
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Disease Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Rust</Text>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Triệu chứng:</Text>
          <Text style={styles.infoText}>
            Bệnh xuất hiện dưới dạng các vết đốm màu vàng cam trên mặt dưới của lá, dẫn đến rụng lá và làm lá bị rụng sớm, gây tổn hại cho quá trình quang hợp.
          </Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Tác động:</Text>
          <Text style={styles.infoText}>
            Bệnh có thể gây thiệt hại năng suất rất cao, nhất là ở các vùng khí hậu nóng ẩm hoặc các mùa mưa lớn trong trường hợp không phát hiện kịp thời.
          </Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Phòng ngừa:</Text>
          <Text style={styles.infoText}>
            Các biện pháp quản lý bệnh bao gồm giống cây chống chịu bệnh, áp dụng các kỹ thuật canh tác và sử dụng thuốc bảo vệ thực vật hợp lý.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 40,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  infoSection: {
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#444",
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555",
  },
});
