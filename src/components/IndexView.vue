<template>
  <article>
    <Sidebar @scrollview="scrollIntoView" :showSidebar.sync="showSidebar" />
    <section class="t-margin-left">
      <span
        style="font-size: 24px; position: fixed; background-color: white; right: 0; top: 0;"
        class="t-cursor-pointer t-padding-10 t-hover-grey t-hide-large"
        @click="showSidebar=true"
      >
        <i class="fas fa-bars"></i>
      </span>

      <IndexHeader ref="projects" :filter.sync="filter" />
      <ProjectGallery :nodes="nodes" />
      <IndexAbout ref="about" />
      <IndexResumes ref="resumes" :resumes="resumes" />
      <IndexContact ref="contact" />
    </section>
  </article>
</template>

<script>
import Sidebar from "~/components/index-view/Sidebar.vue";
import IndexHeader from "~/components/index-view/IndexHeader.vue";
import IndexAbout from "~/components/index-view/IndexAbout.vue";
import IndexResumes from "~/components/index-view/IndexResumes.vue";
import ProjectGallery from "~/components/index-view/ProjectGallery.vue";
import IndexContact from "~/components/index-view/IndexContact.vue";

export default {
  props: ["projects", "resumes"],
  data() {
    return {
      filter: "All",
      showSidebar: false
    };
  },
  //mounted() {
  //  console.log(this);
  //},
  computed: {
    nodes() {
      if (this.filter === "All") {
        return this.projects;
      }
      return this.projects.filter(el => el.tags[0].id === this.filter);
    }
  },
  methods: {
    scrollIntoView(name) {
      if (this.$refs[name].scrollIntoView) {
        this.$refs[name].scrollIntoView();
      } else {
        this.$refs[name].$el.scrollIntoView();
      }
    }
  },
  components: {
    IndexHeader,
    Sidebar,
    IndexAbout,
    IndexResumes,
    ProjectGallery,
    IndexContact
  }
};
</script>

