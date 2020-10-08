<template>
  <div class="direction-btn-wrapper">
    <button class="direction-btn">
      <i class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="arrow-downward">
              <path
                d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z"
              />
            </g>
          </g>
        </svg>
      </i>
    </button>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
export default {}
</script>

<style lang="scss" scoped>
.direction-btn-wrapper {
  display: flex;
  justify-content: center;
  padding: 16px 0;
}
.direction-btn {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: $secondary;
  border: 7px solid $primary;

  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 50px;
  color: $primary;
  display: block;
  svg {
    fill: currentColor;
  }
}

.flipped {
  transform: rotate(-180deg);
}
</style>
