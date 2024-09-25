<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],

  setup(props) {
    return {};
  },
};
</script>

<style></style>
