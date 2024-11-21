import { Button } from 'react-native'; // Import Button component
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { router } from 'expo-router';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Result() {



  const router = useRouter();
  const searchParams = useLocalSearchParams() as { uri: string; name: string; cause: string; solution: string };
  const { uri, name, cause, solution } = searchParams;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      {/* <Text style={styles.header}>Kết quả nhận diện</Text> */}

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: uri }} // Replace with image link or local require
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Disease Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Nguyên nhân:</Text>
          <Text style={styles.infoText}>
            {cause}
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
            {solution}
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
    height: 1050
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
