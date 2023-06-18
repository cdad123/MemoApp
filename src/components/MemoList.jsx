import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf, number } from 'prop-types';

export default function MemoList(props) {
    const { memos } = props;
    const navigation = useNavigation();

    function renderItem({ item }) {
        return (
            <TouchableOpacity 
                style={styles.memoListItem}  
                onPress={() => {navigation.navigate("MemoDetail")}}
                >
                <View>
                    <Text style={styles.memoListItemTitle } numberOfLines={1}>{item.bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{String(item.updatedAt)}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.memoDelete} 
                    onPress={() => {Alert.alert('Are you sure?')}}
                >
                    <Feather name="x" size={24} color="#B0B0B0" />
                </TouchableOpacity>
            </TouchableOpacity>

        );
    }
    return (
        <View>
            <FlatList
                data={memos}
                renderItem={renderItem}
                keyExtractor={(item) => { return item.id; }}
            />
        </View>
    );
}

MemoList.propTypes = {
    memos: arrayOf(shape({
        id: string,
        bodyText: string,
        updateAt: instanceOf(Date),
    })).isRequired,
};

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
    memoDelete: {
        padding: 8,
    },
});