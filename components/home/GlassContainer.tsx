import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Image, styled } from 'tamagui';

const GlassContainer = styled(View, {
  width: 190,
  height: 120,
  borderRadius: 16,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent background
  borderColor: 'rgba(255, 255, 255, 0.3)',
  borderWidth: 1,
  opacity: 1,
});

const GlassmorphismCard = ({ text, uri }) => {
  return (
    <GlassContainer>
      {/* Icon */}
      <Image
        source={{ uri: uri }}
        style={{ width: 40, height: 40, marginBottom: 10 }}
      />

      {/* Text */}
      <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
        {text}
      </Text>
    </GlassContainer>
  );
};

export default GlassmorphismCard;
