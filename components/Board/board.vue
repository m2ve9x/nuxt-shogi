<template>
    <Square :piece="piece"></Square>
</template>

<script lang="ts">
import Vue from 'vue'
import Square from './Square/square.vue';
import { Pawn } from "~/domain/piece/pawn";
import { Piece } from '~/domain/piece/piece';

export default {
    name: "BoardPage",
    components: { Square },
    data() {
        return {
            piece: new Pawn()
        }
    }
}


</script>