import { View, FlatList, Text, StyleSheet } from "react-native";
import MealItem from "../Components/MealItem";

import { MEALS } from "../data/dummydata";

function MealsOverviewScreen({ navigation, route }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageURL: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem data={mealItemProps}></MealItem>;
  }

  const categoryId = route.params.categoryId;
  const categoryName = route.params.categoryName;

  navigation.setOptions({ headerTitle: categoryName });

  const meals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
