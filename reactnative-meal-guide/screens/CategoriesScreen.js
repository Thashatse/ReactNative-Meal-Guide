import { FlatList } from "react-native";
import CategoryGridTile from "../Components/CategoryGridTile";
import { CATEGORIES } from "../data/dummydata";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("CategoryOverview", {
        categoryId: itemData.item.id,
        categoryName: itemData.item.title,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        colour={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
