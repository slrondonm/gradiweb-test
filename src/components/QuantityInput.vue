<template>
  <div class="input-group quantity mr-3" style="width: 130px">
    <div class="input-group-btn">
      <button
        class="btn btn-primary btn-minus"
        @click="$emit('removeQuantity')"
      >
        <font-awesome-icon icon="fa-solid fa-minus" />
      </button>
    </div>
    <input
      type="text"
      class="form-control bg-secondary text-center"
      :value="quantity"
    />
    <div class="input-group-btn">
      <button class="btn btn-primary btn-plus" @click="$emit('addQuantity')">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  emits: ["addQuantity", "removeQuantity"],
};
</script>

<style></style>
