<template>
  <article style="padding: 5px; display: flex; flex-flow: column nowrap;">
    <IndexView :projects="projects" :resumes="resumes" />
  </article>
</template>

<page-query>
{
  resumes: allResume(sortBy: "slug", order: ASC) {
      edges {
          node {
              id
              title
              path
              slug
              description
          }
      }
  }
  projects: allProject(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        url
        glink
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        coverImage (width: 770, height: 380, blur: 10)
        ...on Project {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import IndexView from "~/components/IndexView.vue";

export default {
  computed: {
    projects() {
      return this.$page.projects.edges.map(el => el.node);
    },
    resumes() {
      return this.$page.resumes.edges.map(el => el.node);
    }
  },
  components: {
    IndexView
  },
  metaInfo: {
    title: "Index"
  }
};
</script>
