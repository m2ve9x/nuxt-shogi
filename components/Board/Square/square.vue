<template>
    <div> {{ piece?.name }}</div>
</template>

<script setup lang="ts">import { Piece } from '~/domain/piece/piece';

interface Props {
    piece: Piece | null;
}

const Props = withDefaults(defineProps<Props>(), {
    piece: null,
});
</script>