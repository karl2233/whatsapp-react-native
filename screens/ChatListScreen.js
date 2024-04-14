import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

const ChatListScreen = props => {
    const userData = useSelector(state=>state.auth.userData);
    console.log(userData);
    
    return <View style={styles.container}>
        <Text>Chat list screen</Text>

        <Button title='Go to chat screen' onPress={() => props.navigation.navigate("ChatScreen") } />
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatListScreen;