import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import news_data from "./news_data.json";
import { News } from "./components/News";

export default function App() {
  const renderNews = ({ item }) => {
    return <News item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>News</Text>
      <FlatList data={news_data} renderItem={renderNews} />
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
});
