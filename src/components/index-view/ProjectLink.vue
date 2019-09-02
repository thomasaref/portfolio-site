<template>
<div>
  <a v-if="post.url" style="text-decoration: none;" :href="post.url">
      <ProjectCard :post="post" />
  </a>
  <g-link v-if="post.glink" :to="post.glink" style="text-decoration: none;">
      <ProjectCard :post="post" />
  </g-link>
</div>
</template>

<script>
import ProjectCard from "~/components/index-view/ProjectCard.vue";

export default {
  props: ["post"],
  components: {
      ProjectCard,
  }
};
</script>