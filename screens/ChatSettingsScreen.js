import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const ChatSettingsScreen = () => {
  return (
    <View style={styles.container}>  
      <Text>ChatListScreen</Text>
    </View>
  )
};

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ChatSettingsScreen