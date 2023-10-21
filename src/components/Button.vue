<script setup>
    const props = defineProps({
        title: String,
        className: String,
        icon: String,
    })
</script>

<template>
    <button type="button" :class="className">
        <font-awesome-icon :icon="['fas', icon]" />
        <span>{{ title }}</span>
    </button>
</template>

<style scoped>
    .reload-button{
        display: flex;
        gap: 10px;
        align-items: center;
        background-color: var(--primary-color);
        color: var(--font-color);
        font-weight: bold;
        font-size: 20px;
        border-radius: 5px;
        margin-block: 10px;
        border: none;
        padding: 5px 10px;
    }
</style>