import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from "prop-types";

function Gemini({ color, height, width, style }) {
  return (
    <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
      <Path
        d="M104 152v72l-14.089 56.356A64.014 64.014 0 0088 295.879V328h32v-40l16-64v-64h32v-32h-40a24 24 0 00-24 24z"
        fill="#cb84d3"
      />
      <Path
        d="M128.01 296a8.076 8.076 0 01-1.325-.11l-48-8a8 8 0 012.63-15.782l48 8A8 8 0 01128.01 296z"
        fill="#ffba40"
      />
      <Path
        d="M312 272l-32 80 8 104-19.359 12.906a10.423 10.423 0 00-4.641 8.672A10.422 10.422 0 00274.422 488H320V360l48-64v-24z"
        fill="#c378cb"
      />
      <Path
        d="M425.455 288L408 224v-64a32 32 0 00-32-32h-84.325a24 24 0 00-23.534 19.293L256 208l-80 24v24l87.408-13.447a24 24 0 0019.884-19.014L296 160l16 40 48 16 16-48v56l17.455 64L400 328h32z"
        fill="#c378cb"
      />
      <Path
        d="M383.662 289.668a8 8 0 01-2.12-15.714l46-12.667a8 8 0 014.249 15.426l-46 12.666a8 8 0 01-2.129.289z"
        fill="#ffba40"
      />
      <Path
        d="M192 128h28.325a24 24 0 0123.534 19.293L256 208l80 24v24l-87.408-13.447a24 24 0 01-19.884-19.014L216 160h-24zM152 224a109.256 109.256 0 00-32 77.255V360L48 464l29.357 22.017A9.908 9.908 0 0083.3 488a9.913 9.913 0 009.617-12.317L88 456l72-88 16-144z"
        fill="#cb84d3"
      />
      <Path
        d="M217.579 151.439L200 128h-64v40l16 56a109.256 109.256 0 00-32 77.255V488h88V200l6.6-6.6a32.1 32.1 0 009.4-22.7 32.1 32.1 0 00-6.421-19.261z"
        fill="#5f4bbc"
      />
      <Path
        d="M208 456l19.359 12.906a10.423 10.423 0 014.641 8.672A10.422 10.422 0 01221.578 488H208z"
        fill="#cb84d3"
      />
      <Path
        d="M293.527 152.631L312 128l64 40-16 48a106.582 106.582 0 0140 83.225V456l16 32H312V200l-11.695-7.8A27.634 27.634 0 01288 169.211a27.629 27.629 0 015.527-16.58z"
        fill="#5f4bbc"
      />
      <Path
        d="M224 72l-8 8v16h-24v32h-32V52a28 28 0 1156 0v4z"
        fill="#cb84d3"
      />
      <Path
        d="M198.48 26.03L176 56l-3.654 40.2A52.562 52.562 0 01120 144l18.86-89.15A36.922 36.922 0 01175.27 24H188a27.867 27.867 0 0110.48 2.03z"
        fill="#5f4bbc"
      />
      <Path d="M288 72l8 8v16h24v32h32V52a28 28 0 10-56 0v4z" fill="#c378cb" />
      <Path
        d="M313.52 26.03L344 56v72h32V63.27A39.27 39.27 0 00336.73 24H324a27.867 27.867 0 00-10.48 2.03z"
        fill="#5f4bbc"
      />
      <G fill="#4c3aa3">
        <Path d="M135.733 319.733l-.009-.009a7.991 7.991 0 01-.476-10.773c21.243-25.5 34.461-69.74 39.087-87.25a7.987 7.987 0 019.458-5.748l.039.009a7.988 7.988 0 016 9.822c-4.887 18.681-18.784 65.159-42.342 93.461a7.974 7.974 0 01-11.757.488zM143.608 391.608a8.005 8.005 0 01-.642-10.572c7.534-9.751 15.218-24.99 22.472-44.652 3.949-10.7 6.945-20.517 8.769-26.885a7.984 7.984 0 019.619-5.543l.029.007a7.984 7.984 0 015.745 9.937c-4.718 16.543-16.854 54.682-34.015 76.947a7.992 7.992 0 01-11.977.761zM155.451 455.244a7.985 7.985 0 01-11.737.47l-5.371-5.371L144 456l-.309-.308a7.984 7.984 0 01-.468-10.807 209.238 209.238 0 0030.352-48.764 8 8 0 0110.27-4.183l.017.007a8 8 0 014.34 10.668 222.766 222.766 0 01-32.751 52.631zM364.879 317.526a8 8 0 1013.552-8.509c-18.364-29.4-23.975-51.763-25.685-62.333a7.979 7.979 0 00-7.933-6.684H344h.833a8 8 0 00-7.9 9.253c1.992 12.485 8.261 36.786 27.946 68.273zM344.556 319.087a8 8 0 00-7.967-7.087h-.025a8 8 0 00-7.949 8.9c1.793 16.071 8.8 51.95 36.183 92.955a8.007 8.007 0 0011.308 2.066A7.99 7.99 0 00378.123 405c-25.456-38.175-31.923-71.772-33.567-85.913zM367.156 452.971c-15.724-14.108-20.771-29.848-22.391-38.486a7.978 7.978 0 00-7.9-6.49L336 408h.944a7.992 7.992 0 00-7.865 9.473c2.136 11.217 8.5 30.477 27.435 47.446a7.984 7.984 0 0011.7-1.2 8 8 0 00-1.058-10.748z" />
      </G>
    </Svg>
  );
}

Gemini.defaultProps = {
  height: 120,
  width: 120,
  color: "#FFFFFFFF",
};

Gemini.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default Gemini;
