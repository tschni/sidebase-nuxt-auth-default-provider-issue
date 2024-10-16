<script setup lang="ts">
const { data } = useAuth()
</script>

<template>
  <div>
    <p>user session:</p>
    <pre v-text="data" />
  </div>
</template>
