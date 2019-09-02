<template>
  <nav class="r-quarter">
    <section class="r-pad" style="background-color:#F0E68C; overflow: auto;">
      <h3 class="t-bold r-inline-small" 
        style="text-align: center; font-size: 24px; margin: 10px 0;">{{contact.name}}</h3>
      <svg
        ref="svg"
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        class="r-inline-small r-float-right-small"
        style="max-width: 150px; margin-left: auto; margin-right: auto; display: block;"
        x="10%"
        y="10%"
        width="80%"
        height="80%"
      >
        <rect fill="white" width="100%" height="100%"></rect>
        <rect id="qrdot" fill="black" width="1" height="1"></rect>
      </svg>
      <div class="r-inline-small r-half r-main-div" style="padding-top: 5px;">
        <p>
          <i class="fa fa-home r-margin-right t-text-teal"></i>{{contact.location}}
        </p>
        <p>
          <i class="fa fa-envelope r-margin-right t-text-teal"></i>{{contact.email}}
        </p>
        <p>
            <i class="fas fa-link r-margin-right t-text-teal"></i>
            <a :href="contact.url">{{baseUrl}}</a>
        </p>
        <p>
          <i class="fa fa-phone r-margin-right t-text-teal"></i>{{contact.telephone}}
        </p>
        <p>
          <i class="fas fa-flag-usa r-margin-right t-text-teal"></i>{{contact.residency}}
        </p>
      </div>
    </section>
  </nav>
</template>

<script>
import { QRCode } from "../tqrc.js";

export default {
    props: ["contact"],
    mounted() {
        this.drawSVG();
    },
    methods: {
        drawSVG: function() {
            const vcard = this.fullText;
            QRCode.createModel(vcard);
            const svg = this.$refs["svg"];
            QRCode.drawSVG(svg);
            svg.setAttribute("viewBox", `0 0 ${QRCode.bank.nCount} ${QRCode.bank.nCount}`);
        }
    },
    computed: {
        fullName() {
            return `${this.contact.nameFirst} ${this.contact.nameLast}`;
        },
        baseUrl() {
            if (this.contact.url) {return this.contact.url.slice(8);}
            return null;
        },
        nameMiddle() {return (this.contact.nameMiddle) ? this.contact.nameMiddle : "";},
        nameTitle() {return (this.contact.nameTitle) ? this.contact.nameTitle : "";},
        fullText: function () {
            return [
                //`data:text/plain;charset=utf-8,`
                `BEGIN:VCARD`,
                `VERSION:${this.contact.version}.0`,
                `N:${this.contact.nameLast};${this.contact.nameFirst};${this.nameMiddle};${this.nameTitle};`,
                `FN: ${this.contact.nameFirst} ${this.nameMiddle} ${this.contact.nameLast}`,
                //`FN: ${this.fullName}`, 
                //`ORG: ${this.bank.orgName}`,
                `TITLE: ${this.contact.jobTitle}`,
                `EMAIL;type=INTERNET;type=WORK;type=pref: ${this.contact.email}`,
                `TEL;type=WORK,VOICE,pref: ${this.contact.telephone}`,
                //`item1.ADR;TYPE=WORK,pref: ${this.addressLine1};${this.addressLine2};${this.addressStreet};${this.addressCity};${this.addressState};${this.addressZipcode};${this.addressCountry}`,
                //`CATEGORIES:swimmer,biker`,
                //`LOGO;TYPE=PNG:http://example.com/logo.png`,
                //`PHOTO;TYPE=PNG;VALUE=URI:https://approvedbytes.com/marblesinajar/wp-content/uploads/sites/3/2018/09/default_jar-1242x500.png`,
                //`NOTE: ${this.note}`,
                `URL: ${this.contact.url}`,
                //`REV:20121201T134211Z`,
                `END:VCARD`, // LOGO;TYPE=PNG;ENCODING=b:[base64-data] 3.0: PHOTO;TYPE=JPEG;ENCODING=b:[base64-data] ROLE:Executive
            ].join("\n");
        },
        //...mapState("contact", ["name", "location", "email", "residency", "telephone", "url"]),
        //...mapGetters("contact", ["fullText", "baseUrl"]),
    }
}
</script>
