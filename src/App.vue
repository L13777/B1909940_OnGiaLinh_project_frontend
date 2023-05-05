<script>
  import AppHeader from "@/components/AppHeader.vue";

  export default {
    compoments: {
      AppHeader,
    },
  };
</script>

<template>
  <div id="app">
    <AppHeader />

    <div class="container mt-3">
      <router-view />
    </div>
    <h1>Hello, world!</h1>
  </div>

</template>

<style>
  .page {
    max-width: 400px;
    margin: auto;
  }
</style>