<template>
  <section style="padding: 16px;">
    <h4>Resumes:</h4>
    <div v-for="resume in resumes" :key="resume.id">
      <g-link :to="resume.path">{{resume.title}}</g-link>
      <p>{{resume.description}}</p>
    </div>
  </section>
</template>

<script>
export default {
    props: ["resumes"],
}
</script>
