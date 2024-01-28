import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import news_data from "./news_data.json";
import { News } from "./components/News";
import newsBanner from "./news_banner.json";

export default function App() {
  const renderNews = ({ item }) => {
    return <News item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>News</Text>

      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newsBanner.map((item) => (
              <Image
                key={item.id}
                style={styles.image}
                source={{ uri: item.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    padding: 15,
    backgroundColor: "#EFECEC",
  },

  mainHeader: {
    fontWeight: "900",
    fontSize: 30,
  },

  image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
    borderRadius: 20,
    marginLeft: 10,
  },
});
