import React from 'react';
import {
    View, TextInput, StyleSheet, Keyboard, Alert,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView'

export default function MemoEditScreen() {
    return (
        <KeyboardSafeView style={styles.container} behavior='height'>
            <AppBar />
            <View style={styles.inputContainer}>
                <TextInput value="買い物リスト" multiline style={styles.input} onSubmitEditing={Keyboard.dismiss}/>
            </View>
            <CircleButton name="check" onPress={() => { Alert.alert('Pressed!'); }}/>
        </KeyboardSafeView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    },

});