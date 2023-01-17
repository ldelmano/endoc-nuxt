87 lines (76 sloc) 1.41 KB
<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <div class="close" @click="$emit('close-modal')">
          <i class="icon-times"></i>
        </div>

        <slot name="content"></slot>
      </div>

    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 100;
}

.modal {
  position: relative;
  background-color: white;
  max-height: 700px;
  min-width: 50vw;
  margin-top: 5em;
  border-radius: 20px;
}

.close {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>