import { View } from "react-native";
import {
  LoaderCircle,
  TimerReset,
  Cloudy,
  ArrowBigRight,
} from "@tamagui/lucide-icons";
import {
  Paragraph,
  SizableText,
  Text,
  XStack,
  YStack,
  Button,
  Main,
  YGroup,
  Separator,
  ListItem,
  Image,
  H3,
  Avatar,
} from "tamagui";

import city from "../../assets/images/city.png";
import FeatureItem from "components/features/featurebox";

export default function Home() {
  const test = 10;
  const weather = "Nhiều mây";
  const features = [
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/512/1041/1041022.png",
      label: "Theo dõi bão",
    },
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/128/5846/5846822.png",
      label: "Chuyến xe nông dân",
    },
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/128/4088/4088981.png",
      label: "Bảo hiểm lượng mưa",
    },
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/128/862/862819.png",
      label: "Giá cả thị trường",
    },
  ];

  return (
    <View style={{ backgroundColor: "white" }}>
      {/* Weather report */}
      <YStack gap="$5">
        <XStack
          gap="$2"
          paddingTop="$3"
          backgroundColor="white"
          borderTopColor="$gray7"
          borderWidth="$1"
          borderLeftColor="white"
          borderRightColor="white"
          borderBottomColor="white"
        >
          <YStack flex={5.5} paddingLeft={7} alignItems="center">
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/ecommerceflutter-75a47.appspot.com/o/User%2FImages%2FWeatherBg.png?alt=media&token=3f688e6d-6135-4ba1-afb2-89ed336f19f4",
                width: 180,
                height: 180,
              }}
              borderRadius={100}
            />
            {/* Degrees */}
            <YStack position="absolute" top="50%" left="65%">
              <Cloudy
                size={40}
                style={{
                  transform: [{ translateX: -43 }, { translateY: -50 }],
                }}
              />
              <Text
                style={{
                  transform: [{ translateX: -50 }, { translateY: -50 }],
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                26°C
              </Text>
            </YStack>

            {/* Weather type */}
            <Text textAlign="center" fontWeight="bold">
              {weather}
            </Text>
          </YStack>

          <YStack flex={4.5} paddingRight={15} gap="$2">
            <XStack gap="$3" flexWrap="nowrap" alignItems="center">
              <Text fontSize={"$7"} flexShrink={0}>
                🏠
              </Text>
              <Text flexShrink={0}>Khuê Trung, ...</Text>
              <TimerReset />
            </XStack>
            <YGroup gap="$3">
              <YGroup.Item>
                <ListItem
                  borderColor="$gray4"
                  borderWidth="$1"
                  title="Chỉ số không khí"
                  subTitle={"😷   " + test + "%"}
                  backgroundColor={"white"}
                  borderRadius={"$10"}
                />
              </YGroup.Item>
              <YGroup.Item>
                <ListItem
                  borderColor="$gray4"
                  borderWidth="$1"
                  title="Độ ẩm"
                  subTitle={"💧   " + test + "%"}
                  backgroundColor={"white"}
                  borderRadius={"$10"}
                />
              </YGroup.Item>
            </YGroup>
          </YStack>
        </XStack>

        <YStack alignItems="center" paddingBottom="$2">
          <XStack
            flexWrap="nowrap"
            alignItems="center"
            backgroundColor="#E69227"
            borderRadius={10}
          >
            <Button backgroundColor="#E69227" color="white" width={300}>
              <Image
                source={{
                  uri: "https://image.spreadshirtmedia.net/image-server/v1/compositions/T773A1PA1611PT10X10Y0D153963456W5556H6934Cx000000/views/3,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/lightning-icon-travel-mug.jpg",
                  width: 40,
                  height: 40,
                }}
                borderRadius={100}
              />
              Khuyến cáo nông vụ
            </Button>
            <ArrowBigRight size={30} color="white" />
          </XStack>
        </YStack>
      </YStack>

      {/* Interesting features */}
      <YStack padding={"$5"}>
        <H3>Tính năng nổi bật</H3>
        <XStack gap="$2" justifyContent="space-around" marginTop="$4">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              iconUrl={feature.iconUrl}
              label={feature.label}
            />
          ))}
        </XStack>
      </YStack>

      {/* Medicine Finding */}
      {/* My plant */}
      {/* Marketplace */}
      {/* Expert */}
      {/* News */}
      {/* Logo team */}
    </View>
  );
}
