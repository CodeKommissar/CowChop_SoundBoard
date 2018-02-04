import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';
import { Grid, Col } from "react-native-easy-grid";

import MemberCard from "./src/components/MemberCard/MemberCard";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <MemberCard member="James" />
            <MemberCard member="Brett" />
            <MemberCard member="Jakob" />
          </Col>
          <Col>
            <MemberCard member="Aleks" />
            <MemberCard member="Joe" />
            <MemberCard member="Anna" />
          </Col>
          <Col>
            <MemberCard member="Trevor" />
            <MemberCard member="Asher" />
            <MemberCard member="Aron" />
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
