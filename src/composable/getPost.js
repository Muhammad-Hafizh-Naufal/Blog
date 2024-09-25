import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);

      if (!data.ok) {
        throw Error("Tidak ada data");
      }

      post.value = await data.json();
    } catch (error) {
      error.value = error.message;
    }
  };

  return { post, error, load };
};

export default getPost;
