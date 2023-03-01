import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, colour, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} color={colour} size={24} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
