import { View, Text, StyleSheet } from "react-native";

function MealDetails(data) {
    console.log(data);
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{data.duration}</Text>
      <Text style={styles.detailItem}>{data.complexity}</Text>
      <Text style={styles.detailItem}>{data.affordability}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignContent: "center",
    padding: 8,
    justifyContent: "center",
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
