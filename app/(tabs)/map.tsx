import { Tabs } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import { Paragraph, SizableText, Text, XStack, YStack } from 'tamagui'
import React from 'react';
import MapView,{Circle, Marker, Overlay} from 'react-native-maps'
import { Container } from '@tamagui/lucide-icons';
// import ColorList from '../../components/ColorList';

export default function Map() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 16.047079 ,
                    longitude: 108.206230,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType="terrain"
            >
                <Marker
                    coordinate={{
                        latitude: 16.047079,
                    longitude: 108.206230
                    }}
                >
                <View
                style={{
                    width: 10, // Kích thước cố định
                    height: 10,
                    backgroundColor: 'rgb(0, 0, 255)',
                    borderRadius: 10, // Biến View thành vòng tròn
                    borderWidth: 1,
                    borderColor: 'blue',
                }}
                />
            </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
})