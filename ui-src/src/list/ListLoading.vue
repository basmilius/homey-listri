<template>
    <div :class="$style.listLoading">
        <FluxSpinner/>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { FluxSpinner } from '@flux-ui/components';
</script>

<style
    lang="scss"
    module>
    .listLoading {
        display: flex;
        height: 120px;
        align-items: center;
        justify-content: center;
    }
</style>
