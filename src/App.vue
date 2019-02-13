<template>
  <div id="app" :class="theme">

    <topbar v-if="$root.authlogin"/>
    <div class='requireauth' v-if="$root.authlogin"><navigation v-if="$root.authlogin"/></div>

    <div class='container'>
      <transition name="fade" mode="out-in">
      <router-view/>
      </transition>
  </div>



  </div>
</template>


<script>
import navigation from '@/components/navigation.vue';
import topbar from '@/components/topbar.vue';

export default {
  name: 'app',
  data() {
      return {
        theme: "dark"

  }},
  components: {
    navigation,
    topbar
  },
  methods: {

  }

}

</script>

<style>
@import './style/reset.css';
@import './style/flex.css';
@import './style/base.css';
@import './style/theme.css';
@import './style/modal.css';


</style>
