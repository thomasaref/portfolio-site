<template>
  <section>
    <!-- First Photo Grid-->
    <div class="t-third t-float-left">
      <ProjectLink v-for="node in firstNodes" :key="node.id" :post="node" />
    </div>
    <!-- Second Photo Grid-->
    <div class="t-third t-float-left">
      <ProjectLink v-for="node in secondNodes" :key="node.id" :post="node" />
    </div>
    <!-- Third Photo Grid-->
    <div class="t-third t-float-left">
      <ProjectLink v-for="node in thirdNodes" :key="node.id" :post="node" />
    </div>
    <div style="clear: both; border-bottom: 6px solid #ccc; padding-top: 16px;" />
  </section>
</template>

<script>
import ProjectLink from "~/components/index-view/ProjectLink.vue";

export default {
  props: ["nodes"],
  components: {
    ProjectLink
  },
  computed: {
    firstNodes() {
      return this.nodes.filter((el, ind) => ind % 3 === 0);
    },
    secondNodes() {
      return this.nodes.filter((el, ind) => ind % 3 === 1);
    },
    thirdNodes() {
      return this.nodes.filter((el, ind) => ind % 3 === 2);
    }
  }
};
</script>
      