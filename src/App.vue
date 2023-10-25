<script>
import SimpleUpload from "./components/SimpleUpload.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: { SimpleUpload, TheHeader },
};
</script>

<template>
  <the-header></the-header>
  <SimpleUpload />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  color: aliceblue;
}

body {
  margin: 0;
}
</style>
