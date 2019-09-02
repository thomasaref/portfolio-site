<template>
  <header ref="projects">
    <!--<g-image
          alt="Author image"
          style="margin: 16px; width: 90px; height: 90px;"
          class="t-circle t-float-right t-hide-large"
          src="~/assets/images/author.jpg"
          blur="5"
    />-->
    <div class="t-padding-10">
      <h1 style="font-size: 24px;">Aref-Z</h1>
      <p>Aref works from A to Z!</p>
      <div
        style="margin: 16px 0px; padding: 16px 0px; border-bottom: 6px solid #ccc; display: flex; flex-flow: row wrap; justify-content2: space-evenly;"
      >
        <span
          :class="filterClass('All')"
          class="t-cursor-pointer t-padding-10 t-whitespace-nowrap t-unselectable"
          @click="pressFilter('All')"
        >ALL</span>
        <span
          :class="filterClass('Alexa Skill')"
          class="t-cursor-pointer t-padding-10 t-whitespace-nowrap t-unselectable"
          @click="pressFilter('Alexa Skill')"
        >
          <i class="fab fa-amazon"></i> Alexa
        </span>
        <span
          :class="filterClass('Web app')"
          class="t-cursor-pointer t-padding-10 t-whitespace-nowrap t-unselectable"
          @click="pressFilter('Web app')"
        >
          <i class="fab fa-js-square"></i> Web Apps
        </span>
        <span
          :class="filterClass('Mobile app')"
          class="t-cursor-pointer t-padding-10 t-whitespace-nowrap t-unselectable"
          @click="pressFilter('Mobile app')"
        >
          <i class="fas fa-mobile-alt"></i> Mobile Apps
        </span>
        <span
          :class="filterClass('Python')"
          class="t-cursor-pointer t-padding-10 t-whitespace-nowrap t-unselectable"
          @click="pressFilter('Python')"
        >
          <i class="fab fa-python"></i> Python
        </span>
        <!--<span :class="filterClass('Physics')"
               class="t-cursor-pointer t-padding-10"
               @click="pressFilter('Physics')">
              <i class="fas fa-university"></i> Physics
        </span>-->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["filter"],
  methods: {
    pressFilter(name) {
      this.$emit("update:filter", name);
    },
    filterClass(name) {
      return this.filter === name
        ? "t-hover-grey t-teal"
        : "t-hover-grey t-text-teal";
    }
  }
};
</script>