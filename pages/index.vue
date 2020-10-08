<template>
  <div class="app-wrapper">
    <div class="container" :style="{ height: `${getRealVh}px` }">
      <InputValue v-if="isInputFieldOpen" />
      <div class="currency">
        <TheCurrencyCard position="from" :value="userCurrencys.from" />
      </div>
      <div class="button"><TheDirectionButton /></div>
      <div class="currency">
        <TheCurrencyCard position="to" :value="userCurrencys.to" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userCurrencys', 'isInputFieldOpen', 'getRealVh']),
  },
  mounted() {
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  methods: {
    onResize() {
      this.$store.dispatch('setRealVh', window.innerHeight)
    },
    ...mapActions(['setRealVh']),
  },
}
</script>

<style lang="scss">
.app-wrapper {
  padding: 0 1em;
  background-image: linear-gradient($primary 50%, $secondary 50%);
}
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.currency {
  flex: 1;
}
</style>
