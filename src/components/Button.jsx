import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string, func, shape } from 'prop-types';

export default function Button(props) {
    const { label, onPress, style} = props;
    return (
        <TouchableOpacity style={[styles.buttonContainer, style]} onPress={ onPress }>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

Button.prototypes = {
    label: string.isRequired,
    onPress: func,
    style: shape(),
};
Button.defaultProps = {
    onPress: null,
    style: null,
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: '#FFFFFF',
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
});