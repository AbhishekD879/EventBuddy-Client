import {Dimensions} from "react-native";
import { View ,Image} from "react-native"

const windowDimensions = Dimensions.get('window');

const dimensionConstants = {
  screen: {
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  header: {
    height: windowDimensions.height * 0.1,
  },
  content: {
    height: windowDimensions.height * 0.8,
  },
  footer: {
    height: windowDimensions.height * 0.1,
  },
  welcomeImage:{
    width: windowDimensions.width,
    height: windowDimensions.height * 0.5
  }
};

export default dimensionConstants;