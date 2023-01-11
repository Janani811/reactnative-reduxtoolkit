import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { deleteBlogPost } from "../redux/blog/blogSlice";

const IndexScreen = ({ navigation }: any) => {
  const blogs = useAppSelector((state) => state.blog.blogPost);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.layout}>
      <FlatList
        data={blogs}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.blogPostItem}>
                <View style={styles.blogPost}>
                  <Text style={styles.title}>
                    {item.title} - {item.id}
                  </Text>
                  <TouchableOpacity
                    onPress={() => dispatch(deleteBlogPost({ id: item.id }))}
                  >
                    <Feather name="trash-2" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  blogPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  blogPostItem: {
    backgroundColor: "#F0ECCF",
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#A3BB98",
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 20,
  },
  icon: {
    fontSize: 20,
  },
});

export default IndexScreen;
