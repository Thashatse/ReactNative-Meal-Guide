import { Text, View, StyleSheet } from "react-native";

function SubTitle({subTitle}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitleContainer: {
      padding: 6,
      marginHorizontal: 12,
      marginVertical: 4,
      borderBottomColor: "white",
      borderBottomWidth: 2,
    },
  
    subTitle: {
      fontSize: 18,
      fontWeight: "bold",
      margin: 6,
      textAlign: "center",
      color: 'grey'
    },
  });