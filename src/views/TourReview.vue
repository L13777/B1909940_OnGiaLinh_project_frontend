<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchTour" />
        </div>
    </div>
</template>

<script>
    import InputSearch from '@/components/InputSearch.vue';

    export default {
        components: {
            InputSearch,
        }
    }
</script>

<style scoped>
.page {
    text-align: center;
    max-width: 750px;
}
</style>