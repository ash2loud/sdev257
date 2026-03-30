import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

export default function Row({ children }) {
  return <View style={styles.row}><View style={styles.box}><View style={styles.boxText}>{children}</View></View></View>;
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
