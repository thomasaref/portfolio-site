
<template>
    <!--<title>Digital Business Card</title>

    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="t-main.css" />

    <script defer src="../tqrc/tqrc.js"></script>
    <script defer src="t-qrcode.js"></script>

    <script defer src="t-button.js"></script>
    <script defer src="t-v-card.js"></script>
    <script defer src="t-main.js"></script>-->
    <article id="app">
            <t-vcard />
    </article>  
</template>

<script>
import tVcard from "~/components/business-card/VCard.vue";

export default {
    components: {
        tVcard: tVcard,
    },
  metaInfo: {
      title: "Card Generator"
  }

    
}
</script>