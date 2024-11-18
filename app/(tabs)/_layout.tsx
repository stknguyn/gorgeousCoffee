import { Link, Tabs } from "expo-router";
import { Button, View, XStack, useTheme } from "tamagui";
import { Menu, Search, Bell } from "@tamagui/lucide-icons";
import TabBar from "components/TabBar";
import { UserProvider } from "../../context/UserContext";
import Header from "components/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default function TabLayout() {
  const theme = useTheme();

  const title = "LACAPHE";

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <Atom color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button mr="$4" bg="$purple8" color="$purple12">
                Hello!
              </Button>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerLeft: () => (
            <Link href="/result" asChild>
              <Button mr="$4" bg="$colorTransparent" color="$yellow12">
                <Menu />
              </Button>
            </Link>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <XStack gap="$3" right="$4">
              <View>
                <Search />
              </View>
              <View>
                <Bell />
              </View>
            </XStack>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerLeft: () => (
            <Link href="/camera" asChild>
              <Button mr="$4" bg="$colorTransparent" color="$yellow12">
                <Menu />
              </Button>
            </Link>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <XStack gap="$3" right="$4">
              <View>
                <Search />
              </View>
              <View>
                <Bell />
              </View>
            </XStack>
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          headerLeft: () => (
            <Link href="/camera" asChild>
              <Button mr="$4" bg="$colorTransparent" color="$yellow12">
                <Menu />
              </Button>
            </Link>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <XStack gap="$3" right="$4">
              <View>
                <Search />
              </View>
              <View>
                <Bell />
              </View>
            </XStack>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerLeft: () => (
            <Link href="/camera" asChild>
              <Button mr="$4" bg="$colorTransparent" color="$yellow12">
                <Menu />
              </Button>
            </Link>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <XStack gap="$3" right="$4">
              <View>
                <Search />
              </View>
              <View>
                <Bell />
              </View>
            </XStack>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerLeft: () => (
            <Link href="/camera" asChild>
              <Button mr="$4" bg="$colorTransparent" color="$yellow12">
                <Menu />
              </Button>
            </Link>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <XStack gap="$3" right="$4">
              <View>
                <Search />
              </View>
              <View>
                <Bell />
              </View>
            </XStack>
          ),
        }}
      />
    </Tabs>
  );
}
