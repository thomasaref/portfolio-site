<template>
  <article style="max-width:1000px; padding: 5px; overflow: auto;">
    <ContactInfo :contact="$page.resume.contact"/>
    <MainSection :content="$page.resume.content"/>
    <SidebarInfo :sidebar="$page.resume.sidebar"/>
  </article>
</template>

<script>
import ContactInfo from "~/components/resume/ContactInfo.vue";
import MainSection from "~/components/resume/MainSection.vue";
import SidebarInfo from "~/components/resume/SidebarInfo.vue";

export default {
  name: "home",
  components: {
    ContactInfo,
    MainSection,
    SidebarInfo
  },
  metaInfo () {
    return {
      title: this.$page.resume.title,
      meta: [
        {
          name: 'description',
          content: this.$page.resume.description
        }
      ]
    }
  }
};
</script>

<page-query>
query Resume ($path: String!) {
  resume: resume (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    content
    contact {
        name
        location
        email
        phone
        residency
        jobTitle
        telephone
        url
        nameFirst
        nameLast
        nameMiddle
        nameTitle
        version
    }
    sidebar {
        icon
        title
        items
        halfMobile
    }
  }
}
</page-query>