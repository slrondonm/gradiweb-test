<template>
  <ModalComponent variant="danger" :msg="msg" :visible="visible">
    <section v-if="Object.keys(cart).length > 0" class="vh-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <p>
              <span class="h2">Shopping Cart </span>
            </p>

            <div v-for="(item, index) in cart" :key="index">
              <div class="card mb-4">
                <div class="card-body p-4">
                  <div class="row align-items-center">
                    <div class="col-md-2">
                      <img
                        v-bind:src="getImgUrl(item.thumbnail)"
                        class="img-fluid"
                        alt="Product image"
                      />
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Name</p>
                        <p class="lead fw-normal mb-0">
                          {{ item.title }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Color</p>
                        <p class="lead fw-normal mb-0">
                          <i
                            class="fas fa-circle me-2"
                            style="color: #fdd8d2"
                          ></i>
                          {{ item.color }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Size</p>
                        <p class="lead fw-normal mb-0">
                          <i
                            class="fas fa-circle me-2"
                            style="color: #fdd8d2"
                          ></i>
                          {{ item.size }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Qty</p>
                        <p class="lead fw-normal mb-0">
                          {{ item.quantity }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Price</p>
                        <p class="lead fw-normal mb-0">
                          {{
                            numeralFormat(item.price, "$0.00[,]00") + " COP "
                          }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                      <div>
                        <p class="small text-muted mb-4 pb-2">Total</p>
                        <p class="lead fw-normal mb-0">
                          {{
                            numeralFormat(
                              subTotal(item.price, item.quantity),
                              "$0.00[,]00"
                            ) + " COP "
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-5">
              <div class="card-body p-4">
                <div class="float-end">
                  <p class="mb-0 me-5 d-flex align-items-center">
                    <span class="small text-muted me-2">Order total:</span>
                    <span class="lead fw-normal"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ModalComponent>
</template>

<script>
import ModalComponent from "./modal/ModalComponent.vue";

export default {
  name: "ModalCart",
  components: {
    ModalComponent,
  },
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
    visible: Boolean,
    msg: String,
  },
  data() {
    return { showTotal: null };
  },
  methods: {
    getImgUrl(pic) {
      return pic;
    },
    subTotal(price, qty) {
      return price * qty;
    },
  },
};
</script>
<style></style>
