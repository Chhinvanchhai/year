import React from "react";
import { Animated, Easing } from "react-native";
import PropTypes from "prop-types";

/**
 * Fades a set of children to the top
 * @param children {Array<React.ReactElement>}
 * @param fadeToTop {boolean}
 * @returns {*}
 * @constructor
 */
function Fade({ children, show }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: show ? 1 : 0,
      easing: Easing.ease,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [show]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          paddingVertical: 10,
          opacity: fadeAnim,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

Fade.defaultProps = {
  fadeToTop: false,
  initialHeight: 30,
  finalHeight: 30,
};

Fade.propTypes = {
  fadeToTop: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Fade;
