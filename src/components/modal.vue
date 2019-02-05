<template>
<div id="modal" class="modal">

<div class="btns">
    <button v-if="!showModal" @click="showModal = true" class="btn">
      <slot name="buttontxt">
          open
        </slot>
        </button>
</div>
<transition name="modal">
    <section  class="modal mask" v-if="showModal">
        <div class="wrapper">
            <div class="container">
              <button @click="showModal = false" class="close">
                  Close
                </button>
            <slot name="content">
                  default content
                </slot>
            </div>
        </div>
    </section>
</transition>

</div>
</template>


<script>
export default {
  name: 'modal',
  data() {
      return {
        showModal: false
        }
  }
}
</script>
