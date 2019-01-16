<template>
  <div>
    <counter class="center"></counter>
  </div>
</template>

<script>
import Counter from "./components/Counter";

export default {
  components: {
    counter: Counter
  }
};
</script>

<style>
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>