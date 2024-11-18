import { ScrollView, Image, View, StyleSheet } from 'react-native';
import { Paragraph, SizableText, YStack } from 'tamagui';
import React from 'react';

export default function History() {
    const items = [
        {
            imageUrl: 'https://picsum.photos/200/300',
            date: '2021-01-01',
            predictedLabel: 'Label 1',
            information: 'Information about image 1.'
        },
        {
            imageUrl: 'https://picsum.photos/200/300',
            predictedLabel: 'Label 2',
            date: '2021-01-02',
            information: 'Information about image 2.'
        },
        {
            imageUrl: 'https://picsum.photos/200/300',
            predictedLabel: 'Label 2',
            date: '2021-01-02',
            information: 'Information about image 2.'
        },
        {
            imageUrl: 'https://picsum.photos/200/300',
            predictedLabel: 'Label 2',
            date: '2021-01-02',
            information: 'Information about image 2.'
        },
        {
            imageUrl: 'https://picsum.photos/200/300',
            predictedLabel: 'Label 2',
            date: '2021-01-02',
            information: 'Information about image 2.'
        },
        {
            imageUrl: 'https://picsum.photos/200/300',
            predictedLabel: 'Label 2',
            date: '2021-01-02',
            information: 'Information about image 2.'
        },
        {
            imageUrl: 'https://picsum.photos/200/300',
            predictedLabel: 'Label 2',
            date: '2021-01-02',
            information: 'Information about image 2.'
        },
        // Add more items as needed
    ];

    return (
        <ScrollView>
            <YStack gap="$2" alignItems="center">
                <SizableText size="$3" style={styles.headerText}>History</SizableText>
                {items.map((item, index) => (
                    <YStack key={index} gap="$2" alignItems="center" style={styles.itemContainer}>
                        <SizableText size="$2" style={styles.labelText}>{item.date}</SizableText>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <SizableText size="$2" style={styles.labelText}>{item.predictedLabel}</SizableText>
                        <Paragraph style={styles.infoText}>{item.information}</Paragraph>
                    </YStack>
                ))}
            </YStack>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 10,
        width: '70%',
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 20, // Slightly rounded corners
        borderWidth: 2,
        borderColor: '#ddd',
    },
    headerText: {
        color: '#000000', // Change header text color
    },
    labelText: {
        color: '#000000', // Change label text color
    },
    infoText: {
        color: '#000000', // Change information text color
    },
    
});