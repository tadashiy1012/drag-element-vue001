<template>
    <div draggable="true"><slot /></div>
</template>
<script>
export default {
}
</script>
<style scoped>
div > div > * {
    pointer-events: none;
}
</style>
