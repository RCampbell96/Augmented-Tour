'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARImageMarker,
  ViroBox,
  ViroARTrackingTargets,
  ViroARPlaneSelector,
  ViroVideo,
  ViroNode
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Hold Up",
      text2: "Hold Up",
      text3: "Hold Up",
      text4: "Hold Up",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      text11: "",
      text12: ""
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (

      <ViroARScene onTrackingUpdated={this._onInitialized} anchorDetectionTypes={"Vertical"}>
        <ViroARImageMarker target={"targetOne"} >
          {/* <ViroVideo
              source={require('./video/IMG_0463.mp4')}
              loop={false}
              scale={[.5, .5, 3]}
              position={[0, 0, 0]}
              rotation={[-90, 0, 0]}
              volume={3}
              muted={false}
              onFinish={this._onVideoFinished}
              onError={this._onVideoError}
            /> */}
          <ViroText
            text={this.state.text}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
          {/* <ViroText
            text={this.state.text}
            scale={[.5, .5, 3]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          /> */}
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetTwo"} >
          <ViroText
            text={this.state.text2}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetThree"} >
          <ViroText
            text={this.state.text3}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetFour"} >
          <ViroText
            text={this.state.text4}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetFive"} >
          <ViroText
            text={this.state.text5}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetSix"} >
          <ViroText
            text={this.state.text6}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetSeven"} >
          <ViroText
            text={this.state.text7}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetEight"} >
          <ViroText
            text={this.state.text8}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetNine"} >
          <ViroText
            text={this.state.text9}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetTen"} >
          <ViroText
            text={this.state.text10}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetEleven"} >
          <ViroText
            text={this.state.text11}
            scale={[.5, .5, .5]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            style={styles.helloWorldTextStyle}
          />
        </ViroARImageMarker>
      </ViroARScene>

      // <ViroARScene onTrackingUpdated={this._onInitialized} >
      //   <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
      //   <ViroText text={this.state.text2} scale={[.5, .5, .5]} position={[0, 1, -4]} style={styles.helloWorldTextStyle} />
      // </ViroARScene>
    );
  }

  _onVideoFinished(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text5: "Let's Move On!",
      });
    } else if (state == ViroConstants.TRACKING_NONE) {

    }
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Welcome to the Innovate Depot Tour! Head through the double doors and walk straight.",
        text2: "Keep on truckin. If you'd like to see some info on the CEO hover over his placard. When you make it to the large room, hover camera with steps in the center",
        text3: "This is our CEO's office. Do not disturb. Lots of innovation in progress.",
        text4: "Welcome to the Atrium :D! Hungry or lonely? You can solve both here. Hover over the Crestline doors for more info otherwise check out the board of pictures to the right of the steps.",
        text5: "This is Crestline! Get fantasticly fresh bagels, sandwiches, and baked goods.",
        text6: "A little history of the Depot, it used to be a Sears Outlet! Head down the hallway on your left and take your first right.",
        text7: "Hey! The Think Room is coming up on your right, check it out!",
        text8: "This is the Depot's Think room! It's designed to help get your mind of things, workout, or just have fun! Keep heading down the hallway.",
        text9: "You're heading the right way!",
        text10: "Take a left and head towards the last door on the right named the Innovation Lab and go in. Hover over the Innovate Birmingham sign",
        text11: "Thank you for taking our tour. We hope you enjoyed!",
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
    }
  }
  _onVideoError(event) {
    console.log("Video loading failed with error: " + event.nativeEvent.error);
  }
}

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: require('./res/InnovateTour/IMG_2569.png'),
    orientation: "Up",
    physicalWidth: 0.75 // real world width in meters
  },
  "targetTwo": {
    source: require('./res/InnovateTour/IMG_2579.png'),
    orientation: "Up",
    physicalWidth: 1.5
  },
  "targetThree": {
    source: require('./res/InnovateTour/IMG_2570.png'),
    orientation: "Up",
    physicalWidth: 0.2
  },
  "targetFour": {
    source: require('./res/InnovateTour/IMG_2571.png'),
    orientation: "Up",
    physicalWidth: 7
  },
  "targetFive": {
    source: require('./res/InnovateTour/IMG_2572.png'),
    orientation: "Up",
    physicalWidth: 3
  },
  "targetSix": {
    source: require('./res/InnovateTour/IMG_2573.png'),
    orientation: "Up",
    physicalWidth: 4
  },
  "targetSeven": {
    source: require('./res/InnovateTour/IMG_2578.png'),
    orientation: "Up",
    physicalWidth: 2
  },
  "targetEight": {
    source: require('./res/InnovateTour/IMG_2574.png'),
    orientation: "Up",
    physicalWidth: 4
  },
  "targetNine": {
    source: require('./res/InnovateTour/IMG_2577.png'),
    orientation: "Up",
    physicalWidth: 2
  },
  "targetTen": {
    source: require('./res/InnovateTour/IMG_2576.png'),
    orientation: "Up",
    physicalWidth: 4
  },
  "targetEleven": {
    source: require('./res/InnovateTour/IMG_2575.png'),
    orientation: "Up",
    physicalWidth: 3
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;