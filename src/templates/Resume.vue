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


<style>
/*html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}*/
/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize 
html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}*/
/*body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}*/

.r-main-div hr {
    margin: 0px;
    margin-bottom: 5px;
}
/*audio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}
audio:not([controls]){display:none;height:0}[hidden],
template{display:none}
a{background-color:transparent;-webkit-text-decoration-skip:objects}
a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}*/
/*dfn{font-style:italic}mark{background:#ff0;color:#000}
small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}
button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}
button,input{overflow:visible}button,select{text-transform:none}
button,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}
button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}
button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}
fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}
legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}
[type=checkbox],[type=radio]{padding:0}
[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
[type=search]{-webkit-appearance:textfield;outline-offset:-2px}
[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}
::-webkit-input-placeholder{color:inherit;opacity:0.54}
::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
/* End extract */
.r-main-div  {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  line-height: 1.5;
}
/*html {
  overflow-x: hidden;
}
h1 {
  font-size: 36px;
}
h2 {
  font-size: 30px;
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 20px;
}
h5 {
  font-size: 18px;
}
h6 {
  font-size: 16px;
}
.w3-serif {
  font-family: serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-weight: 400;
  margin: 10px 0;
}*/
/*.w3-wide{letter-spacing:4px}
hr{border:0;border-top:1px solid #eee;margin:20px 0}*/

/*html,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
}*/

.r-main-div p, .r-main-div h3, .r-main-div h5, .r-main-div ul, .r-main-div li {
  margin: 0;
  padding: 0;
  text-align: left;
}

.r-main-div h5 {
    font-size: 18px;
}

.r-main-div ul {
  margin-bottom: 5px;
  margin-left: 40px;
} 

.r-threequarter,
.r-quarter {
  width: 100%;
}
.r-half {
  width: 49.9999%;
}
.r-hide-large {
  display: inline;
}
.r-hide-small {
  display: none;
}
.r-inline-small {
  display: inline;
}
.r-float-right-small {
  float: right;
}

.r-head {margin-top: 5px;}

.r-row-small {
  display: flex;
  flex-flow: row wrap;
}

@media (min-width: 501px) {
  .r-row-small {
      display: flex;
      flex-flow: column nowrap;
  }
  .r-head {
      margin-top: 0;
  }
  .r-quarter {
    width: 24.9999%;
    float: left;
  }
  .r-threequarter {
    width: 74.9999%;
    float: right;
  }
  .r-half {
    width: 100%;
  }
  .r-hide-large {
    display: none;
  }
  .r-hide-small,
  .r-inline-small {
    display: block;
  }
  .r-float-right-small {
    float: none;
  }
}

.r-margin-right {
  margin-right: 5px;
}
.r-margin-right-wide {
  margin-right: 10px;
}
.r-margin-top {
  margin-top: 5px;
}
.r-pad-left {
  padding-left: 10px;
}
.r-pad {
  padding: 5px;
}
.r-large {
  font-size: 18px;
}
</style>

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

<style lang="scss">
/*.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    
    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);
  
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}*/
</style>