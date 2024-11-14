<script setup>
import {useRoute} from "vue-router";

import sandbox from "../modules/contents/sandbox.vue";

const route = useRoute();
</script>

<template>
  <sandbox :key="route.params.id"></sandbox>
</template>
