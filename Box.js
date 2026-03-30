import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

export default function Row({ children }) {
  return <View style={styles.row, styles.box}><View style={styles.boxText}>{children}</View></View>;
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
