import React, { useContext } from "react";
// import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import { View, StyleSheet } from "react-native";
import { useAppDispatch } from "../redux/store";
import { addBlogPost } from "../redux/blog/blogSlice";

const CreateScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.layout}>
      <BlogPostForm
        onSubmit={(title: any, content: any) => {
          dispatch(addBlogPost({ title: title, content: content }));
          navigation.navigate("Index");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  },
});

export default CreateScreen;
