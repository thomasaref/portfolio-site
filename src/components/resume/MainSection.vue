<template>
  <section class="r-threequarter">
    <div class="r-main-div" style="padding: 0 5px;" v-html="content"></div>
  </section>
</template>

<script>
export default {
  name: "MainSection",
  props: ["content"]
};
</script>
   
