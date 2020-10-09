<template>
  <transition name="slide">
    <div
      v-if="isInputFieldOpen"
      :class="['input-container', inputFieldSection]"
    >
      <div class="delete">tap to delete</div>
      <div class="input">342.56 <span class="pipe"></span></div>
      <div class="num-field">
        <TheInputButton :section="inputFieldSection" :number="'1'" />
        <TheInputButton :section="inputFieldSection" :number="'2'" />
        <TheInputButton :section="inputFieldSection" :number="'3'" />
        <TheInputButton :section="inputFieldSection" :number="'4'" />
        <TheInputButton :section="inputFieldSection" :number="'5'" />
        <TheInputButton :section="inputFieldSection" :number="'6'" />
        <TheInputButton :section="inputFieldSection" :number="'7'" />
        <TheInputButton :section="inputFieldSection" :number="'8'" />
        <TheInputButton :section="inputFieldSection" :number="'9'" />
        <TheInputButton :section="inputFieldSection" :number="'.'" />
        <TheInputButton :section="inputFieldSection" :number="'0'" />
        <TheInputButton
          :section="inputFieldSection"
          @click.native="closeInputField"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="checkmark">
                <rect width="24" height="24" opacity="0" />
                <path
                  d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"
                />
              </g>
            </g>
          </svg>
        </TheInputButton>
      </div>
      <div class="close">x</div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    //   inputFieldStyle() {
    //       return {
    //           from : this.inputFieldSection === "from"
    //       }
    //   },
    ...mapGetters(['inputFieldSection', 'isInputFieldOpen']),
  },

  methods: {
    ...mapActions(['closeInputField']),
  },
}
</script>

<style lang="scss">
.input-container {
  position: absolute;
  height: 100%;
  bottom: 0;
  left: 0;
  padding: 1em 0;

  display: flex;
  flex-direction: column;
}

.pipe {
  width: 2px;
  border-radius: 2px;
  height: $fs-1;
  margin: 0 8px;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-duration: 0.5s;
  animation-direction: alternate;
}

.from {
  background: $primary;
  .input {
    color: $secondary;
  }
  .pipe {
    background: $secondary;
  }
}

.to {
  background: $secondary;
  .input {
    color: $primary;
  }
  .pipe {
    background: $primary;
  }
}

.delete {
  text-align: center;
  color: $primary-100;
  font-size: $fs-5;
}

.input {
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fs-1;
}

.num-field {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 380px;
}

.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}

@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
