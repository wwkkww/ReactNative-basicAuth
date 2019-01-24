import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1, //outside border
        borderRadius: 2, //rounded corner
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, //seethrough 0-1
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5, //leave some space
        marginRight: 5,
        marginTop: 10,
    }
});

export { Card };