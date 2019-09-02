<template>
  <section class="r-quarter" style="background-color:#87CEEB; overflow: auto;">
    <div class="r-pad">
      <div v-for="(sb, sbIndex) in sidebar" :key="sbIndex">
        <div v-if="!sb.halfMobile" class="r-main-div">
          <p class="r-margin-top t-bold">
            <i :class="sb.icon" class="r-margin-right-wide t-text-teal"></i>
            {{sb.title}}
          </p>
          <div class="r-row-small">
            <p v-for="(item, itemIndex) in sb.items" :key="itemIndex" class="r-pad-left">{{item}}</p>
          </div>
        </div>
        <div v-if="sb.halfMobile" class="r-half t-float-left r-main-div">
          <p class="r-margin-top t-bold">
            <i :class="sb.icon" class="r-margin-right t-text-teal"></i>
            {{sb.title}}
          </p>
          <div class="r-pad-left">
            <p v-for="(item, itemIndex) in sb.items" :key="itemIndex">{{item}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["sidebar"]
};
</script>

