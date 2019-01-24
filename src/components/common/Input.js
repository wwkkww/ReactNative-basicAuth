import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 2,
        paddingLeft: 2,
        fontSize: 18,
        lineHeight: 25,
        flex: 2,
        paddingBottom: 2
    },
    labelStyle: {
        paddingLeft: 20,
        paddingBottom: 0,
        fontSize: 18,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 0
    }
});

export { Input };