<template>
  <div class="input-button">
    <div class="btn"><slot />{{ number }}</div>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
  },
}
</script>

<style lang="scss" scoped>
.input-button {
}

.btn {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: $primary-100;
  margin: 11px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $fs-3;
  color: $secondary;
  transition: all 0.1s ease;
}

.btn svg {
  display: block;
  width: 20px;
  fill: currentColor;
}

.btn:active {
  transform: scale(0.9);
  transition: all 0.1s ease;
}
</style>
