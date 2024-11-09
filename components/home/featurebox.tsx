import { Avatar, SizableText, View, XStack, YStack } from "tamagui";

const FeatureItem = ({ iconUrl, label }) => {
    return (
        <YStack top="$2" alignItems="center" width={80}>
          <View borderWidth="$0.25" borderRadius={20}>
          <Avatar size="$6" padding="$1">
            <Avatar.Image
              accessibilityLabel={label}
              src={iconUrl}
            />
            <Avatar.Fallback backgroundColor="$gray1" />
          </Avatar>
          </View>
          <SizableText textAlign="center" size="$2">{label}</SizableText>
        </YStack>
    );
};

export default FeatureItem;