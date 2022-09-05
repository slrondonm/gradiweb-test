<template>
  <div class="col-lg-5 pb-5">
    <div id="product-carousel" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner border">
        <div
          class="carousel-item"
          v-for="(image, i) in slides"
          :key="image.id"
          :class="currentIndex === i ? 'active' : ''"
        >
          <img
            :src="image.src"
            :alt="image.alt !== null ? image.alt : 'Product image'"
            class="d-block w-100"
          />
        </div>
      </div>
      <!-- Left and right controls/icons -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#product-carousel"
        data-bs-slide="prev"
        @click="prev"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#product-carousel"
        data-bs-slide="next"
        @click="next"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ["clickOnProduct"],
  data() {
    return {
      index: 0,
      currentIndex: 0,
      timer: null,
    };
  },
  async mounted() {
    this.startSlide();
  },
  async updated() {
    this.index = this.slides.length;
    if (this.currentIndex >= this.index) {
      this.currentIndex = 0;
    }
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },
};
</script>

<style></style>
