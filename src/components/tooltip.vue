<template >
<div class="tooltip" @mouseover="active = true" @mouseout="active = false" >
  <img src="@/assets/icons/info.png"/>
      <p v-if="active" class="tip"> {{tip}}</p>
    </div>
</template>


<script>
export default {
  name: 'hint',
   props: {
      tip: {
        default: 'Error',
        type: String
      }
},
    data() {
        return {
          active: false,
        }
  }
}

</script>

<style scoped>
div, p, img {
  display:inline;
}

.tooltip {
  position: absolute;
    display: inline;}
.tip {width:200px;position:absolute; top:-20px; left:30px; padding:1em; background-color:#666; color:#fff;}
</style>
