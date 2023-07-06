import * as React from "react";
import Svg, { Circle, Ellipse, G, Path } from "react-native-svg";
import PropTypes from "prop-types";
import { useTheme } from "react-native-paper";

function ItsDifficult({ color, height, width, style }) {
  const { colors } = useTheme();
  return (
    <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
      <Circle cx={256} cy={256} r={256} fill="#ffd93b" />
      <Path
        d="M421.584 332.448c-24.96 67.2-89.68 115.04-165.6 115.04s-140.56-47.84-165.6-115.04c-3.04-8.32 2.88-17.12 11.76-17.12 102.56 14.8 205.2 14.8 307.68 0 8.88 0 14.88 8.8 11.76 17.12z"
        fill="#3e4347"
      />

      <Path
        d="M369.68 320.336c-75.728 8.08-151.536 8.08-227.312 0 3.504 32.592 52.992 43.872 113.6 43.872 60.72 0 110.208-11.264 113.712-43.872z"
        fill="#fff"
      />
      <Path
        d="M255.984 447.488c21.712 0 42.464-4.032 61.664-11.184-3.104-11.808-9.84-22.144-19.024-29.616-8.56-6.96-20.48-8.96-30.32-4.08-6 2.96-13.12 4.72-21.28 4.72-1.6 0-3.2-.08-4.72-.24-10.16-.88-20.4 2.64-26.32 10.96-4.592 6.576-7.792 14.16-9.296 22.336 15.648 4.56 32.16 7.104 49.296 7.104z"
        fill="#e24b4b"
      />
      <G fill="#3e4347">
        <Path d="M214.336 233.36c-6.624 0-12-5.376-12-12 0-16.8-13.664-30.464-30.448-30.464S141.44 204.56 141.44 221.36c0 6.624-5.376 12-12 12s-12-5.376-12-12c0-30.032 24.432-54.464 54.448-54.464s54.448 24.432 54.448 54.464c0 6.624-5.376 12-12 12zM382.576 233.36c-6.624 0-12-5.376-12-12 0-16.8-13.664-30.464-30.448-30.464-16.8 0-30.464 13.664-30.464 30.464 0 6.624-5.376 12-12 12s-12-5.376-12-12c0-30.032 24.432-54.464 54.464-54.464 30.016 0 54.448 24.432 54.448 54.464 0 6.624-5.376 12-12 12z" />
      </G>
      <Path
        d="M363.568 101.024c0-10.656-19.28-42.112-19.28-42.112s-19.28 31.472-19.28 42.112 8.64 19.28 19.28 19.28c10.656 0 19.28-8.624 19.28-19.28z"
        fill="#38c0dc"
      />
      <Ellipse
        transform="rotate(-141.178 352.645 107.609)"
        cx={352.645}
        cy={107.609}
        rx={4.016}
        ry={6.464}
        fill="#45cbea"
      />
      <Path
        d="M451.008 168.384c0-17.52-31.744-69.328-31.744-69.328s-31.744 51.808-31.744 69.328 14.208 31.744 31.744 31.744 31.744-14.208 31.744-31.744z"
        fill="#38c0dc"
      />
      <Path
        d="M438.112 183.344c-3.664 4.608-8.864 6.384-11.712 4.144-2.96-2.24-2.24-7.92 1.424-12.416 3.792-4.608 8.992-6.512 11.952-4.144 2.832 2.24 2.112 7.92-1.664 12.416z"
        fill="#45cbea"
      />
    </Svg>
  );
}

ItsDifficult.defaultProps = {
  height: 120,
  width: 120,
  color: "white",
};

ItsDifficult.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default ItsDifficult;