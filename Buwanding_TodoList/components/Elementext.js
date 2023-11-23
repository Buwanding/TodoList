import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
function ElementText() {
  return (
    <Text style={styles.todo}>Todo List</Text>
  )
}
const styles = StyleSheet.create({
  todo: {
    marginTop: 100,
    fontSize : 40,
    fontWeight : "bold"
  },
});
export default ElementText;