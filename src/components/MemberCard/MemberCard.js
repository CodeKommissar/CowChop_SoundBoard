import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { Row } from "react-native-easy-grid";

// Import the react-native-sound module
var Sound = require('react-native-sound');
// Enable playback in silence mode
Sound.setCategory('Playback');

const imageLocations = {
  James: require("../../assets/images/James.jpg"),
  Aleks: require("../../assets/images/Aleks.png"),
  Trevor: require("../../assets/images/Trevor.jpg"),
  Asher: require("../../assets/images/Asher.jpg"),
  Brett: require("../../assets/images/Brett.jpg"),
  Joe: require("../../assets/images/Joe.jpg"),
  Anna: require("../../assets/images/Anna.jpg"),
  Jakob: require("../../assets/images/Jakob.jpg"),
  Aron: require("../../assets/images/Aron.jpg"),
}

const MemberCard = (props) => {
  // Load the sound file from the app bundle
    var memberSound = new Sound(`${props.member}.mp3`, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + memberSound.getDuration() + 'number of channels: ' + memberSound.getNumberOfChannels());
    });

  handleOnPressMember = () => {
    memberSound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        // reset the player to its uninitialized state (android only)
        // this is the only option to recover after an error occured and use the player again
        memberSound.reset();
      }
    });
  }

  return (
    <Row style={styles.memberCard}>
      <TouchableOpacity onPress={this.handleOnPressMember}>
        <Image
          source={imageLocations[props.member]}
          style={styles.memberPicture}
        />
        <Text style={styles.memberText}>
          {props.member}
        </Text>
      </TouchableOpacity>
    </Row>
  )
}

const styles = StyleSheet.create({
  memberCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
  },
  memberPicture: {
    height: 125,
    width: 125,
    borderWidth: 5,
    borderColor: "#E3BF27",
    borderRadius: 150,
    margin: 3
  },
  memberText: {
    color: "white",
    fontSize: 25,
    textAlign: "center"
  }
});

export default MemberCard;
