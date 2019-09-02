export default {
    namespaced: true,
    state: {
        showCard: false,
        printView: false,
        nameFirst: "Thomas",
        nameMiddle: "",
        nameLast: "Aref",
        nameTitle: "", 
        orgName: "",
        title: "Web Developer",
        email: "thomas@aref.xyz",
        telephone: "(217) 493-8883",
        note: "",
        url: "https://arefz.com",
        fullFilename: "user.vcf",
        addressCountry: "USA", 
        addressZipcode: "12345",
        addressState: "IL",
        addressCity: "Springfield",
        addressStreet: "123 Main St.",
        addressLine1: "",
        addressLine2: "",
        version: "3",
    },
    getters: {
        baseUrl(state) {
            return state.url.slice(8);
        },
    fullText: function(state) {
        return [
            //`data:text/plain;charset=utf-8,`
            `BEGIN:VCARD`,
            `VERSION:${state.version}.0`,
            `N:${state.nameLast};${state.nameFirst};${state.nameMiddle};${state.nameTitle};`,
            `FN: ${state.nameFirst} ${state.nameMiddle} ${state.nameLast}`,
            //`FN: ${this.fullName}`, 
            //`ORG: ${state.orgName}`,
            `TITLE: ${state.title}`,
            `EMAIL;type=INTERNET;type=WORK;type=pref: ${state.email}`,
            `TEL;type=WORK,VOICE,pref: ${state.telephone}`,
            //`item1.ADR;TYPE=WORK,pref: ${this.addressLine1};${this.addressLine2};${this.addressStreet};${this.addressCity};${this.addressState};${this.addressZipcode};${this.addressCountry}`,
            //`CATEGORIES:swimmer,biker`,
            //`LOGO;TYPE=PNG:http://example.com/logo.png`,
            //`PHOTO;TYPE=PNG;VALUE=URI:https://approvedbytes.com/marblesinajar/wp-content/uploads/sites/3/2018/09/default_jar-1242x500.png`,
            //`NOTE: ${this.note}`,
            `URL: ${state.url}`,
            //`REV:20121201T134211Z`,
            `END:VCARD`, // LOGO;TYPE=PNG;ENCODING=b:[base64-data] 3.0: PHOTO;TYPE=JPEG;ENCODING=b:[base64-data] ROLE:Executive
        ].join("\n");
    }
    }
};
