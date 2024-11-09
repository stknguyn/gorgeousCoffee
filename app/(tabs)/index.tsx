import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import {
  LoaderCircle,
  TimerReset,
  Cloudy,
  ArrowBigRight,
  ListPlus,
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
  ZStack,
  H4,
  styled,
  H1,
  ScrollView,
  H2,
} from "tamagui";

import city from "../../assets/images/city.png";
import FeatureItem from "components/home/featurebox";
import GlassmorphismCard from "components/home/GlassContainer";
import MyPlantCard from "components/home/myplantContainer";

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
    <ScrollView>
      <YStack backgroundColor="white">
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
          <H3 color="#294531">Tính năng nổi bật</H3>
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
        <ImageBackground
          source={{
            uri: "https://www.rdworldonline.com/wp-content/uploads/2019/09/pesticides_Shutterstock_featured.jpg",
          }} // replace with your image URL
          style={{ width: Dimensions.get("window").width, height: 230 }} // covers entire background
        >
          <YStack
            backgroundColor="rgba(0, 0, 0, 0.4)"
            width={Dimensions.get("window").width}
            height={230}
          >
            <YStack padding="$2">
              <XStack
                justifyContent="space-between"
                flexWrap="nowrap"
                alignItems="center"
                padding="$2"
              >
                <H3 color="white">Tra Cứu Thuốc</H3>
                <SizableText
                  size="$5"
                  color="white"
                  textDecorationLine="underline"
                >
                  Tra cứu ngay
                </SizableText>
              </XStack>

              <XStack top="$7" gap="$3">
                <GlassmorphismCard
                  text="Thuốc BVTV được phép lưu hành"
                  uri="https://cdn-icons-png.flaticon.com/512/5671/5671070.png"
                />
                <GlassmorphismCard
                  text="Thuốc BVTV không được lưu hành"
                  uri="https://cdn3.iconfinder.com/data/icons/weed-vivid-vol-2/256/Pesticide-Free-512.png"
                />
              </XStack>
            </YStack>
          </YStack>
        </ImageBackground>

        {/* My plant */}
        <ZStack height={500}>
          <YStack height={500}>
            <YStack height={100} backgroundColor="white" />
            <YStack
              height={400}
              backgroundColor="#F3F8FC"
              borderTopRightRadius={100}
              borderTopLeftRadius={100}
            />
          </YStack>

          <YStack>
            <XStack justifyContent="space-between" padding="$4">
              <H3 color="#294531">Cây trồng của tôi</H3>
              <ListPlus size={40} color="$green7Light" />
            </XStack>
            <YStack top="$-2">
              <YStack>
                <XStack justifyContent="center">
                  <Avatar
                    circular
                    size="$6"
                    borderWidth="$0.25"
                    borderColor="$gray9"
                  >
                    <Avatar.Image
                      accessibilityLabel="Cam"
                      src="https://cdn-icons-png.flaticon.com/128/4215/4215095.png"
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                  </Avatar>
                </XStack>
                <XStack justifyContent="space-around" top="$-7">
                  <Avatar
                    circular
                    size="$6"
                    borderWidth="$0.25"
                    borderColor="$gray9"
                  >
                    <Avatar.Image
                      accessibilityLabel="Cam"
                      src="https://cdn-icons-png.flaticon.com/128/5280/5280911.png"
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                  </Avatar>
                  <Avatar
                    circular
                    size="$6"
                    borderWidth="$0.25"
                    borderColor="$gray9"
                  >
                    <Avatar.Image
                      accessibilityLabel="Cam"
                      src="https://cdn-icons-png.flaticon.com/128/1330/1330443.png"
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                  </Avatar>
                </XStack>
                <XStack justifyContent="space-between" top="$-8">
                  <Avatar
                    circular
                    size="$6"
                    borderWidth="$0.25"
                    borderColor="$gray9"
                  >
                    <Avatar.Image
                      accessibilityLabel="Cam"
                      src="https://cdn-icons-png.flaticon.com/512/8782/8782264.png"
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                  </Avatar>
                  <Avatar
                    circular
                    size="$6"
                    borderWidth="$0.25"
                    borderColor="$gray9"
                  >
                    <Avatar.Image
                      accessibilityLabel="Cam"
                      src="https://cdn-icons-png.flaticon.com/128/14034/14034643.png"
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                  </Avatar>
                </XStack>
              </YStack>

              <YStack alignItems="center" justifyContent="center" top="$-12">
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/128/4215/4215095.png",
                    width: 150,
                    height: 150,
                  }}
                />
                <Text textAlign="center" color="#294531" fontSize="$6">Cà phê</Text>
              </YStack>

              <XStack top="$-12" justifyContent="space-between" padding="$3">
                <MyPlantCard text="Kĩ thuật canh tác" uri="https://cdn-icons-png.flaticon.com/128/188/188333.png" />
                <MyPlantCard text="Sâu và bệnh hại" uri="https://cdn-icons-png.flaticon.com/128/11167/11167005.png" />
                <MyPlantCard text="Lịch nông vụ" uri="https://cdn-icons-png.flaticon.com/128/8718/8718037.png" />
              </XStack>
            </YStack>
          </YStack>
        </ZStack>

        {/* Marketplace */}
        <XStack alignItems="center" justifyContent="center" height={300}>
          <H1 textAlign="center">CloseAI</H1>
        </XStack>
        
        {/* Expert */}
        {/* News */}
        {/* Logo team */}
      </YStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensures the background covers the whole screen
    resizeMode: "cover", // Ensures the image scales to cover the entire view
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
});
