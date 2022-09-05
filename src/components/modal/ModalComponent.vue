<template>
  <div>
    <!-- Modal -->
    <div
      v-if="openClose"
      class="modal fade show"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-modal="true"
      role="dialog"
      style="display: block"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              @click="openCloseFun()"
              class="btn-close"
            ></button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              @click="openCloseFun()"
              :class="'btn btn-' + variant"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    visible: Boolean,
    variant: String,
  },
  data() {
    return {
      openClose: this.visible,
    };
  },
  methods: {
    openCloseFun() {
      this.openClose = false;
    },
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.openClose = newVal;
      console.log("new:" + newVal + "=" + oldVal);
    },
  },
};
</script>

<style></style>
