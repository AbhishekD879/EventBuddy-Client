import React from 'react';
import Svg, { Path, Text } from 'react-native-svg';

const SvgFallbackComponet = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} fill="none" {...props}>
      <Path fill="#000" d="M0 0h200v200H0z" />
      <Text
        x="50%"
        y="50%"
        fill="#fff"
        alignmentBaseline="middle"
        dy=".35em"
        fontSize={20}
        lengthAdjust="spacingAndGlyphs"
        textAnchor="middle"
        textLength="90%">
        {'Oops! Failed to load SVG'}
      </Text>
    </Svg>
  );
};

export default function SVGFallback(props) {
  console.log(props.children);
  if (props.children) {
    return props.children;
  } else {
    return <SvgFallbackComponet />;
  }
}
