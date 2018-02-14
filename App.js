/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, Content, Header, Body } from 'native-base';
import CamaraComponent from './Components/CamaraComponent';

let ScreenHeight = Dimensions.get("window").height;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      auterScrollEnable: true,
    }
  }

  verticalScroll = (index) => {
    if (index != 1) {
      this.setState({ auterScrollEnable: false });//no esta en el scroll de la camara
    } else {
      this.setState({ auterScrollEnable: true });//1 quiere decir que estan en la pestaña de camara
    }
    //console.warn(index);

  }

  render() {
    return (
      <Container >
        <Content >
          <View style={{ height: ScreenHeight }}>
            <Swiper
              loop={false}
              showsPagination={false}
              index={1}
              scrollEnabled={this.state.outerScrollEnabled}
            >

              <View style={styles.slideDefault}>
                <Text style={styles.text}>Chat</Text>
              </View>
              {/*
              <Swiper
               style={{backgroundColor:'red'}}
                loop={false}
                showsPagination={false}
                horizontal={false}
                index={0}
                onIndexChanged={(index) => this.verticalScroll(index)}
              >
                <View style={{ width: 400, height: 200,backgroundColor:'red' }}>
                  <Text style={styles.text}>Search</Text>
                </View>
                <View style={{ width: 400, height: 200 }}>
                  <CamaraComponent />
                </View>
                <View style={{ width: 400, height: 200 }}>
                  <Text style={styles.text}>Memories</Text>
                </View>
              </Swiper>*/}

              <CamaraComponent />

              <View style={styles.slideDefault}>
                <Text style={styles.text}>Stories</Text>
              </View>
            </Swiper>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  slideDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
