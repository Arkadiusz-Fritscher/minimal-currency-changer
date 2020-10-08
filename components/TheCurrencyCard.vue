<template>
  <div :class="['currency-card', currencyStyle]">
    <div class="currency">{{ value.currency }}</div>
    <div class="changing-value" @click="openInputField({ value: position })">
      {{ value.value }}<span class="currency-symbol">{{ value.symbol }}</span>
    </div>
    <div class="slug">{{ value.slug }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    position: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currencyStyle() {
      return {
        top: this.position === 'from',
        bottom: this.position === 'to',
      }
    },
  },

  methods: {
    ...mapActions(['openInputField']),
  },
}
</script>

<style lang="scss" scoped>
.currency-card {
  height: 100%;
  display: flex;
}

.top {
  flex-direction: column;
  .currency {
    color: $secondary;
    margin-top: 1em;
  }
  .changing-value {
    color: $secondary;
  }
}

.bottom {
  flex-direction: column-reverse;
  .currency {
    color: $primary;
    margin-bottom: 1em;
  }
  .changing-value {
    color: $primary;
  }
}

.currency {
  text-align: center;
  font-size: $fs-2;
  font-weight: 600;
  flex: 0;
}

.changing-value {
  font-size: $fs-1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .currency-symbol {
    font-size: $fs-2;
    color: $primary-100;
    display: inline-block;
    margin-top: 0.7em;
  }
}

.slug {
  text-align: center;
  font-size: $fs-3;
  color: $primary-100;
  text-transform: uppercase;
}
</style>
