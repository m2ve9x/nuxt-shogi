<template>
    <div> {{ test }}</div>
</template>

<script setup lang="ts">
interface Props {
    test: string;
}

const Props = withDefaults(defineProps<Props>(), {
    test: "test"
});
</script>