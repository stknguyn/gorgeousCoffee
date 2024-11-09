import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Image, styled } from 'tamagui';

const MyPlantContainer = styled(View, {
  width: 110,
  height: 110,
  borderRadius: 16,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff', // semi-transparent background
  borderColor: 'rgba(255, 255, 255, 0.3)',
  borderWidth: 1,
  opacity: 1,
});

const MyPlantCard = ({ text, uri }) => {
  return (
    <MyPlantContainer>
      {/* Icon */}
      <Image
        source={{ uri: uri }}
        style={{ width: 40, height: 40, marginBottom: 10, top: 3 }}
      />

      {/* Text */}
      <Text style={{ fontSize: 20, textAlign: 'center' }}>
        {text}
      </Text>
    </MyPlantContainer>
  );
};

export default MyPlantCard;
