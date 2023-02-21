import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDeatial";

function MealItem({ data }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MealDetails", { mealID: data.id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{ uri: data.imageURL, width: "100%", height: 200 }}
            />
            <Text style={styles.title}>{data.title}</Text>
          </View>
        </View>
        <MealDetails
          duration={data.duration}
          complexity={data.complexity}
          affordability={data.affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0.25 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "18",
    margin: 8,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
