import React from "react";
import { Text, StyleSheet } from 'react-native'

export default function ComponentsScreen() {

    return <Text style={styles.textStyle}>ComponentsScreen</Text>;
}
 
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        
    },

})