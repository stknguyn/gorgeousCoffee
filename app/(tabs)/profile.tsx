import { View } from "react-native";
import { User, Edit3, LogOut, Camera, KeySquare } from "@tamagui/lucide-icons";
import {
  Text,
  YStack,
  XStack,
  Button,
  Avatar,
  ListItem,
  H3,
  Separator,
} from "tamagui";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const [phone, setPhone] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("phone");
        if (value !== null) {
          setPhone(value);
        } else {
          router.replace("/login");
        }
      } catch (e) {
        console.error("Error reading value:", e);
      }
    };

    getData(); // Gọi hàm lấy dữ liệu
  }, [router]); // Chạy lại mỗi khi router thay đổi

  // Đăng xuất
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("phone"); 
      console.log("Đăng xuất thành công!");
      router.replace("/login"); // Điều hướng 
    } catch (e) {
      console.error("Error removing data from AsyncStorage:", e);
    }
  };

  const userName = phone;
  const userEmail = "nguyenvana@gmail.com";
  const userImage = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  const actions = [
    {
      icon: Edit3,
      label: "Chỉnh sửa thông tin",
      link: "../information",
    },
    {
      icon: KeySquare,
      label: "Đổi mật khẩu",
      link: "",
    },
    {
      icon: LogOut,
      label: "Đăng xuất",
      link: "",
      action: handleLogout,
    },
  ];

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <YStack alignItems="center" padding="$5">
        {/* Avatar */}
        <Avatar circular size="$10">
          <Avatar.Image source={{ uri: userImage }} />
        </Avatar>

        {/* User Info */}
        <Text fontSize="$6" fontWeight="bold" marginTop="$3">
          {userName}
        </Text>
        <Text color="$gray7" fontSize="$4">
          {userEmail}
        </Text>
      </YStack>

      {/* Actions */}
      <YStack gap="$4" padding="$5">
        <H3>Quản lý cá nhân</H3>
        <Separator />
        {actions.map((action, index) => (
          <Button
            key={index}
            onPress={() => {
              if (action.action) {
                action.action(); // Gọi action nếu có (chỉ áp dụng cho Đăng xuất)
              } else {
                router.push(action.link); // Điều hướng nếu có link
              }
            }}
            style={{
              textDecoration: "none",
              width: "100%",
              paddingVertical: 12,
              backgroundColor: "white",
              borderRadius: 6,
              borderWidth: 1,
              borderColor: "#ccc",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            {action.icon && <action.icon size={20} style={{ color: "#555" }} />}
            <Text>{action.label}</Text>
          </Button>
        ))}
      </YStack>
    </View>
  );
}
