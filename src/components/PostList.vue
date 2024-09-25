<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <router-link to="{name: 'ShowPost ', params: {id: post.id}}">
        <h3>{{ post.title }}</h3>
      </router-link>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import PostSingle from "@/components/PostSingle.vue";

export default {
  components: {
    PostSingle,
  },
  props: ["posts"],
  setup(props) {
    console.log("PostList received posts:", props.posts);
    return {};
  },
};
</script>

<style></style>
