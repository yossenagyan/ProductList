import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: "center",
        height: 60,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        marginBottom: 10
    },
    text: {
        fontSize: 25,
        color: "white"
    }
})

class Header extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Header</Text>
      </View>
    )
  }
}

export default Header;