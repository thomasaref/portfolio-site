<template>
  <div
    class="t-hover-grey"
    style="display: flex; flex-flow: column nowrap; border: 1px solid black; margin: 10px; padding: 10px;"
  >
    <div style="display: flex; flex-flow: row nowrap;">
      <g-image
        alt="Cover image"
        v-if="post.coverImage"
        fit="inside"
        style="width: 108px; height: 108px; float: left;"
        :src="post.coverImage"
      />
      <h4 style="display: inline-block; margin: 10px; color: black">{{post.title}}</h4>
    </div>
    <p style="color: black">{{post.description}}</p>
    <a v-if="post.url" :href="post.url"
       style="word-wrap:break-word;">{{post.url}}</a>
    <g-link v-if="post.glink" :to="post.glink"
     style="word-wrap:break-word;">{{post.glink}}</g-link>
    <span style="color: black; margin-top: 10px;"># {{ post.tags[0].title }}</span>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>