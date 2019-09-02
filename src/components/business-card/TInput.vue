<template>
    <label style="display: flex; flex-flow: row nowrap; margin: 10px;">
        <span style="padding: 10px;"><slot></slot></span>
        <input style="flex: 1; padding: 10px;" :type="type" v-model="vModel" />
    </label>
</template>

<script>
export default {
    props: {
        type: {type: String, default: "text"},
        value: {},
    },
    computed: {
        vModel: {
            get: function() {return this.value;},
            set: function(newValue) {this.$emit("input", newValue);}
        }
    },
}
</script>