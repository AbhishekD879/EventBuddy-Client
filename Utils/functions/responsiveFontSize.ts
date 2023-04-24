import { PixelRatio, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

const responsiveFontSize = (size: number) => {
  const newSize = size * scale;

  return parseFloat(PixelRatio.roundToNearestPixel(newSize).toFixed(2));
};

export default responsiveFontSize;
