<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import getPosts from "../composable/getPosts.js";

export default {
  name: "Home",

  components: {
    PostList,
  },

  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
