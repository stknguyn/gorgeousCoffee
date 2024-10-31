import { Tabs } from 'expo-router'
import { View } from 'react-native'
import React from 'react';
import { Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'
// import ColorList from '../../components/ColorList';

export default function Profile() {
    return (
        <View>
            <YStack gap="$2" alignItems="center">
                <SizableText size="$3">profile</SizableText>
            </YStack>
        </View>
    );
}