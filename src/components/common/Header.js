import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

    },
    textStyle: {
        fontSize: 20,
        fontWeight: '600'
    }

});

export { Header };