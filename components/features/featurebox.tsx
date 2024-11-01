import { Avatar, SizableText, XStack, YStack } from "tamagui";

const FeatureItem = ({ iconUrl, label }) => {
    return (
        <YStack top="$2" alignItems="center" width={80}>
          <Avatar size="$6">
            <Avatar.Image
              accessibilityLabel={label}
              src={iconUrl}
            />
            <Avatar.Fallback backgroundColor="$gray1" />
          </Avatar>
          <SizableText textAlign="center" size="$2">{label}</SizableText>
        </YStack>
    );
};

export default FeatureItem;