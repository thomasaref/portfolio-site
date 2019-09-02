<template>
    <section>
        <div v-show="!vcard.showCard">
            <h1 style="text-align: center;">QR code digital business card generator</h1>
            <div style="display: flex; flex-flow: column nowrap; ">
                    <!--<t-input v-model="nameTitle">Title:</t-input>-->
                    <t-input v-model="vcard.nameFirst">First name:</t-input>
                    <!--<t-input v-model="nameMiddle">Middle name:</t-input>-->
                    <t-input v-model="vcard.nameLast">Last name:</t-input>
                    <!--<t-input v-model="vcard.orgName">Org. name:</t-input>-->
                    <t-input v-model="vcard.title">Title:</t-input>
                    <t-input type="email" v-model="vcard.email">Email:</t-input>
                    <t-input type="url" v-model="vcard.url">URL:</t-input>
                    <t-input type="tel" v-model="vcard.telephone">Telephone:</t-input>
                    <!--<t-input v-model="note">Note:</t-input>-->
            
                    <!--<a :href="fullText" download
                        target="_blank"
                        :download="vcard.fullFilename"
                    >
    			        <p class="button">Download</p>
                    </a>-->
                    <div>
                        <t-button @click="test">View</t-button>
                        <t-button @click="print">Print</t-button>
                    </div>
                </div>
            </div>
            <t-qr-code v-show="vcard.showCard" :link="fullText"></t-qr-code>
        </section>
        </template>

<script>
import tInput from "~/components/business-card/TInput.vue";
import tQrCode from "~/components/business-card/TQRCode.vue";
import tButton from "~/components/business-card/TButton.vue";
import { mapState, mapGetters } from "vuex";

export default {
    //mounted() {console.log(this.vcard, this.fullText)},
    computed: {
    ...mapState(["vcard"]),
    ...mapGetters("vcard", ["fullText"]),
     //  fullText: function() {return vcardbank.fullText();}
    },

    /*data: function() {
        return {
            vcard: vcardbank.bank,
        };
    },*/
    methods: {
        test: function() {
            this.vcard.showCard = true;
        },
        print: function() {
            this.vcard.printView = true;
            this.vcard.showCard = true;
        }
    },
    components: {
        tInput: tInput,
        tButton: tButton,
        tQrCode: tQrCode,
    },
}
</script>