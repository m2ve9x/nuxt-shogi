<template>
    <Square></Square>
</template>

<script lang="ts">
import Vue from 'vue'
import Square from './Square/square.vue';

export default Vue.extend({
    name: "BoardPage",
    components: { Square }
})
</script>