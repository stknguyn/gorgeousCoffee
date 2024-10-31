import { View } from 'react-native';
import { Paragraph, SizableText, Text, XStack, YStack, Button, Main } from 'tamagui'

export default function Home() {
    return (
        <View>
            {/* Weather report */}
            <XStack>
                <YStack flex={5.5} paddingLeft={5}>
                    <Text>Hi</Text>
                </YStack>
                <YStack flex={4.5}>
                    <Text>Hello</Text>
                </YStack>
            </XStack>

            {/* Interesting features */}
            {/* Medicine Finding */}
            {/* My plant */}
            {/* Marketplace */}
            {/* Expert */}
            {/* News */}
            {/* Logo team */}
        </View>
    );
}