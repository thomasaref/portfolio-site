<template>
  <section>
    <nav :class="sidebarClass" class="t-sidebar">
      <span
        @click="closeSidebar"
        style="padding: 10px;"
        class="t-float-right t-hide-large t-hover-grey t-cursor-pointer"
      >
        <i class="fas fa-times"></i>
      </span>

      <div style="padding: 10px;">
        <!--<g-image
          alt="Author image"
          style="margin: 16px; width: 90px; height: 90px;"
          class="t-circle"
          src="~/assets/images/author.jpg"
          width="180"
          height="180"
          blur="5"
        />-->
        <div style="clear: both;" />
        <h4 style="border-bottom: 1px solid #ccc;">Aref-Z Menu</h4>
      </div>
      <div style="display: flex; flex-flow: column nowrap;">
        <span
          @click="scrollIntoView('projects')"
          style="padding: 10px;"
          class="t-hover-grey t-text-teal t-cursor-pointer t-unselectable"
        >
          <i class="fa fa-th-large fa-fw"></i> Projects
        </span>
        <span
          @click="scrollIntoView('about')"
          style="padding: 10px;"
          class="t-hover-grey t-text-teal t-cursor-pointer t-unselectable"
        >
          <i class="fa fa-user fa-fw"></i> About
        </span>
        <span
          @click="scrollIntoView('resumes')"
          style="padding: 10px;"
          class="t-hover-grey t-text-teal t-cursor-pointer t-unselectable"
        >
          <i class="fas fa-list-alt fa-fw"></i> Resumes
        </span>
        <span
          @click="scrollIntoView('contact')"
          style="padding: 10px;"
          class="t-hover-grey t-text-teal t-cursor-pointer t-unselectable"
        >
          <i class="fa fa-envelope fa-fw"></i> Contact
        </span>
        <a
          href="https://www.linkedin.com/in/thomas-aref"
          style="padding: 10px;"
          class="t-hover-grey t-text-teal t-text-decoration-none"
        >
          <i class="fab fa-linkedin fa-fw"></i> LinkedIn
        </a>
      </div>
    </nav>
    <!-- Overlay effect when opening sidebar on small screens -->
    <div
      :class="overlayClass"
      class="t-overlay t-hide-large t-cursor-pointer"
      @click="closeSidebar"
      title="close side menu"
    ></div>
  </section>
</template>

<script>
export default {
  props: ["showSidebar"],
  data() {
    return {
      sidebarShown: false,
    };
  },
  methods: {
    scrollIntoView(name) {
        this.$emit("scrollview", name);
        this.closeSidebar();
    },
    closeSidebar() {this.$emit("update:showSidebar", false);}
  },
  computed: {
    sidebarClass() {
      if (!this.sidebarShown && this.showSidebar === false) {
        return "t-display-none-large";
      }
      this.sidebarShown = true;
      return this.showSidebar ? "t-display-block t-from-left" : "t-leave-left";
    },
    overlayClass() {
      if (!this.sidebarShown && this.showSidebar === false) {
        return "t-display-none";
      }
      return this.showSidebar ? "t-display-block t-fade-in" : "t-fade-out";
    }
  }
};
</script>

