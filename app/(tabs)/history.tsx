import { Tabs } from 'expo-router'
import { View } from 'react-native'
import { Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'
import React from 'react';
// import ColorList from '../../components/ColorList';

export default function History() {
    return (
        <View>
            <YStack gap="$2" alignItems="center">
                <SizableText size="$3">history</SizableText>
            </YStack>
        </View>
    );
}