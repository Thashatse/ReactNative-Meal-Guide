import { View, Text, StyleSheet } from "react-native";

function List({ListData}) {
  return ListData.map((item) => (
    <View key={item} style={styles.listIte}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listIte: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: 'lightgrey'
    },

    itemText: {
        textAlign: 'center',
    }
});
