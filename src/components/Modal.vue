<template>
  <div class="modal-container">
    <div class="modal-main">
      <div class="modal-header">
        <button class="btn-modal" v-on:click="closeModal">X</button>
      </div>
      <div class="modal-body">
        <span>Test Title</span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: { shipData: {} },
  data: function () {
    return {};
  },
  methods: {
    closeModal() {
      // console.log(this.$parent);
      this.$parent.toggleModal();
    },
  },
};
</script>

<style>
.modal-container {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container-enter-active {
  transition: all 0.3s ease;
}
.modal-container-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.modal-container-enter, .modal-container-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.modal-main {
  position: inherit;
  min-width: 400px;
  max-width: 80vw;
  min-height: 500px;
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>