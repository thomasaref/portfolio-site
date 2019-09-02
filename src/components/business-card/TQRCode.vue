

<template>
  <div>
  <div v-if="!vcard.printView" class="t-display-flex t-flex-flow-row-nowrap">
    <div
      style="height: 90vh; padding: 10% 0; display: flex; flex-flow: column nowrap; justify-content: space-evenly; align-items: center"
    >
      <h1>{{vcard.nameTitle}} {{vcard.nameFirst}} {{vcard.nameMiddle}} {{vcard.nameLast}}</h1>
      <h3>
        <i class="fa fa-tools t-text-teal"></i>
        {{vcard.title}}
      </h3>
      <svg
        ref="svg"
        class="t-padding t-margin"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="viewBox"
        x="10%"
        y="10%"
        width="80%"
        height="80%"
        style="min-width: 100px; min-height: 100px;"
        :fill="qrc.colorLight"
      >
        <rect :fill="qrc.colorLight" width="100%" height="100%" />
        <rect :id="qrc.svgId" :fill="qrc.colorDark" width="1" height="1" />
      </svg>
      <h4>
        <i class="fa fa-envelope t-text-teal"></i>{{vcard.email}}
      </h4>
      <h4>
         <i class="fa fa-phone t-text-teal"></i>{{vcard.telephone}}
      </h4>
      <h4>
          <i class="fas fa-link t-text-teal"></i><a :href="vcard.url">{{vcard.url}}</a>
      </h4>
    </div>
    <!--<svg
      ref="svgCard"
      :width="sCardWidth"
      :height="sCardHeight"
      xmlns="http://www.w3.org/2000/svg"
      style="border-radius: 0px; font-family: Dosis, sans-serif; margin: 0; padding: 0; margin-right: -1px; margin-top:-5px;"
      :style="borderStyle"
      class="section-to-print"
      @click="test"
    >-->
    <!--style-placeholder-->
    <!--  <rect id="bg" width="100%" height="100%" :fill="qrc.colorLight" />

      <text
        x="50%"
        y="15%"
        text-anchor="middle"
        :fill="mainTextColor"
        :style="smallFont"
        style="font-weight:800;"
      >{{vcard.nameTitle}} {{vcard.nameFirst}} {{vcard.nameMiddle}} {{vcard.nameLast}}</text>
      <text
        x="50%"
        y="22%"
        text-anchor="middle"
        :fill="mainTextColor"
        :style="tinyFont"
      >
        {{vcard.title}}</text>

      <svg
        ref="svg2"
        class="t-padding t-margin"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="viewBox"
        x="10%"
        y="10%"
        width="80%"
        height="80%"
        :fill="qrc.colorLight"
      >
        <rect :fill="qrc.colorLight" width="100%" height="100%" />
        <rect :id="qrc.svgId" :fill="qrc.colorDark" width="1" height="1" />
      </svg>
      <text
        x="50%"
        y="85%"
        text-anchor="middle"
        :fill="mainTextColor"
        :style="tinyFont"
      >E-mail: {{vcard.email}}</text>
      <text
        x="50%"
        y="91%"
        text-anchor="middle"
        :fill="mainTextColor"
        :style="tinyFont"
      >Phone: {{vcard.telephone}}</text>
      <a :href="vcard.url">
        <text
          x="50%"
          y="97%"
          text-anchor="middle"
          :fill="mainTextColor"
          :style="tinyFont"
          style="text-decoration: underline;"
        >{{vcard.url}}</text>
      </a>
    </svg>-->
  </div>
<div v-if="vcard.printView" style="display: flex; flex-flow: row wrap;">
    <div  v-for="n in 12" :key="n"
      style="margin: 0; height: 3.5in; width: 2in; border2: 1px solid black; padding: 10px 0; display: flex; flex-flow: column nowrap; justify-content: space-evenly; align-items: center"
    >
      <p>{{vcard.nameTitle}} {{vcard.nameFirst}} {{vcard.nameMiddle}} {{vcard.nameLast}}</p>
      <p>
        <i class="fa fa-tools t-text-teal"></i>
         {{vcard.title}}
      </p>
      <svg
        ref="svg"
        class="t-padding t-margin"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="viewBox"
        x="10%"
        y="10%"
        width="80%"
        height="80%"
        :fill="qrc.colorLight"
      >
        <rect :fill="qrc.colorLight" width="100%" height="100%" />
        <rect :id="qrc.svgId" :fill="qrc.colorDark" width="1" height="1" />
      </svg>
      <p>
        <i class="fa fa-envelope t-text-teal"></i>
        {{vcard.email}}
      </p>
      <p>
         <i class="fa fa-phone t-text-teal"></i>
         {{vcard.telephone}}
      </p>
      <p>
          <i class="fas fa-link t-text-teal" style="margin-right: 5px;"></i>
          <a :href="vcard.url">{{baseUrl}}</a>
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import { QRCode } from "~/components/tqrc.js";
import { mapState, mapGetters } from "vuex";

export default {
  props: ["link"],
  data: function() {
    return {
      qrc: QRCode.bank,
      //vcard: vcardbank.bank,
      pnghref: null,
      svghref: null,
      filename: "business-card",
      cardText: "", //databank.bank.card.obj.text,
      nexter: false,
      cardWidth: 368, //296,
      cardHeight: 420,
      hivefeedLink: "https://www.hivefeed.co",
      mainTextColor: "black", //"rgb(255, 255, 255)",
      yellowTextColor: "rgb(255, 195, 10)",
      useBackgroundImage: false,
      invert: true,
      tab: "design",
      size: "businessCard", //"A5"
      edit: false,
      doSave: false,
      count: 3
    };
  },
  watch: {
    link: function() {
      //if (this.link) {this.drawBoth();}
    },
    /*["vcard.printView"]: function() {
      if (this.vcard.printView) {
        this.drawBoth();
        this.printImage();
      }
    },*/
    ["vcard.showCard"]: function() {
      if (this.vcard.showCard) {
        this.drawBoth();
      }
    }
  },
  created: function() {
    if (this.link) {
      this.$nextTick(function() {
        //if (this.data.card.obj) {
        this.drawBoth();
        //}
      });
    }
  },
  methods: {
    drawBoth: function() {
      QRCode.createModel(this.link);

      //QRCode.drawCanvas(this.$refs.canvas);

      //const canvas = this.$refs.canv;
      //const ctx = canvas.getContext("2d");
      /*const width = canvas.width;
            const height = canvas.height;
            ctx.fillStyle = "#2B4D54";
            ctx.fillRect(0, 0, width, height);
            //ctx.font = "30px Comic Sans MS";
            ctx.font = "30px Dosis";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("TELL US WHAT", width/2, height/10);
            ctx.font = "48px Dosis";
            ctx.fillText("           THINK", width/2, height/5);
            ctx.fillStyle = "#F6C544";
            ctx.fillText("YOU             ", width/2, height/5);
            ctx.font = "30px Dosis";
            ctx.fillStyle = "white";
            ctx.fillText(this.data.card.obj.name, width/2, height*2.75/10);
            ctx.drawImage(this.$refs.canvas, width/3, height/3, width/3, width/3); 
            ctx.font = "30px Dosis";
            ctx.fillText("SCAN TELL REWARD", width/2, height*4/5);
            ctx.font = "18px Dosis";
            //ctx.fillText(this.link, width/2, height*3.5/5);
            ctx.fillStyle = "white";
            ctx.fillText("Your feedback is helping us improve for you!", width/2, height*8.5/10);
            ctx.fillText("hivefeed", width/2, height*39/40);
            this.pnghref = canvas.toDataURL();*/
      //console.log(this.$refs);
      this.$nextTick(() => {
      if (this.vcard.printView) {
          for (let svg of this.$refs.svg) {

              QRCode.drawSVG(svg);
          }
      //QRCode.drawSVG(this.$refs.svg[0]);
      //QRCode.drawSVG(this.$refs.svg[1]);
      } else {QRCode.drawSVG(this.$refs.svg);}
      });       
      /*this.$nextTick(function() {
        const xml = new XMLSerializer()
          .serializeToString(this.$refs.svg[0])
          .replace(/"/g, "'")
          .replace(/#/g, "%23");
        //this.svghref = `data:image/svg+xml;charset=utf-8, ${xml}`;
      });*/
    },
    printImage: function() {
      const xml = new XMLSerializer()
        .serializeToString(this.$refs.svg)
        .replace(/"/g, "'");
      const str = `
        <html>
            <head>
            </head>
           <body>
            <div style="display: flex; flex-flow: column nowrap;">
                        <h1> Yo </h1>
                        </div>
                        </body>
                        </html>`; /*
                        <div
      style="height: 100vh; padding: 10% 0; display: flex; flex-flow: column nowrap; justify-content: space-evenly; align-items: center"
    >
      <h1>{{vcard.nameTitle}} {{vcard.nameFirst}} {{vcard.nameMiddle}} {{vcard.nameLast}}</h1>
      <h3>
        <i class="fa fa-tools t-text-teal"></i>
        {{vcard.title}}
      </h3>
      <svg
        ref="svg"
        class="t-padding t-margin"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="viewBox"
        x="10%"
        y="10%"
        width="80%"
        height="80%"
        :fill="qrc.colorLight"
      >
        <rect :fill="qrc.colorLight" width="100%" height="100%" />
        <rect :id="qrc.svgId" :fill="qrc.colorDark" width="1" height="1" />
      </svg>
      <h4>
        <i class="fa fa-envelope t-text-teal"></i>{{vcard.email}}
      </h4>
      <h4>
         <i class="fa fa-phone t-text-teal"></i>{{vcard.telephone}}
      </h4>
      <h4>
          <i class="fas fa-link t-text-teal"></i><a :href="vcard.url">{{vcard.url}}</a>
      </h4>
    </div>
    
                            ${xml.repeat(8)}
                        </body>
                    </html>
                `;*/
      window
        .open()
        .document.write(
          `<iframe id='demo' srcdoc="${str}" frameborder='0' style='border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100vh;' allowfullscreen></iframe>`
        );
    },
    clear: function() {
      QRCode.clear(this.$refs.canvas.getContext("2d"), this.$refs.svg);
    },
    //updateCardText: function() {
    //    fire.updateItem(COLLECTION.CARDS, this.data.card.id, {text: this.cardText});
    //},
    invertColors: function(color) {
      this.invert = color === "dark" ? false : true;
      //this.invert=!this.invert;
      this.drawBoth();
    },
    changeSize: function(size) {
      this.size = size;
      this.drawBoth();
    },
    openEdit: function() {
      this.edit = true;
    },
    cancelEdit: function() {
      this.edit = false;
    },
    saveEdit: function() {
      this.doSave = true;
      this.edit = false;
    },
    change: function(id, evnt) {
      if (this.doSave) {
        this.cardText = evnt;
        this.$nextTick(function() {
          this.updateCardText();
          this.doSave = false;
        });
      }
    },
    test: function() {
      //console.log("blah");
      this.vcard.showCard = false;
    },
    svg(n) {return `svg${n}`;}
  },
  computed: {
    ...mapState(["vcard"]),
    ...mapGetters("vcard", ["baseUrl"]),
    countArr: function() {
      return [0, 1, 2];
    },
    viewBox: function() {
      return `0 0 ${this.qrc.nCount} ${this.qrc.nCount}`;
    },
    divStyle: function() {
      return `width: ${this.qrc.width}px; height: ${this.qrc.height}px;"`;
    },
    width: function() {
      return `${this.qrc.width}px;`;
    },
    height: function() {
      return `${this.qrc.height}px;`;
    },
    pngName: function() {
      return this.filename.endsWith(".png")
        ? this.filename
        : this.filename + ".png";
    },
    svgName: function() {
      return this.filename.endsWith(".svg")
        ? this.filename
        : this.filename + ".svg";
    },
    businessName: function() {
      return this.data.card.obj ? this.data.card.obj.name : "";
    },
    borderStyle: function() {
      if (this.vcard.showCard) {
        return "";
      }
      return ""; //(this.invert) ? "border: 3px solid #2B4D54" : "border: 3px solid #FFFFFF";
    },
    sCardWidth: function() {
      if (this.vcard.showCard) {
        return "100%";
      }
      if (this.size === "A5") {
        return "148mm";
      } else if (this.size === "businessCard") {
        return "2in";
      }
      return this.cardWidth;
    },
    sCardHeight: function() {
      if (this.vcard.showCard) {
        return "100vh";
      }
      if (this.size === "A5") {
        return "210mm";
      } else if (this.size === "businessCard") {
        return "3.5in";
      }
      return this.cardHeight;
    },
    bigFont: function() {
      return this.size === "A5" ? "font-size: 64px;" : "font-size:36px;";
    },
    mediumFont: function() {
      return this.size === "A5" ? "font-size:48px;" : "font-size:24px;";
    },
    smallFont: function() {
      if (this.vcard.showCard) {
        return "font-size: 24px;";
      }
      return this.size === "A5" ? "font-size:36px;" : "font-size:18px;";
    },
    tinyFont: function() {
      if (this.vcard.showCard) {
        return "font-size: 18px;";
      }
      return this.size === "A5" ? "font-size:24px;" : "font-size:12px;";
    }
  },
  components: {
    //tButton: tButton,
    //tTextInput: tTextInput,
    //tToggleText: tToggleText,
  }
};
</script>

<style scoped>
p {
    font-size: 15px;
    font-weight: 700;
    margin: 3px;
}
</style>
