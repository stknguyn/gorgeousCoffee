// Header.tsx
import React from 'react';
import { Link, Tabs } from "expo-router";
import { Button, View, XStack, useTheme } from "tamagui";
import { Menu, Search, Bell } from "@tamagui/lucide-icons";

const Header = (tabname) => ({
  title: {tabname},
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
});

export default Header;
