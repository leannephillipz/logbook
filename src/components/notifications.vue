<template>
<section class="notify">
  <h3>Notifications: {{notifydata.length}}</h3>
      <ul>
          <li v-for="note in notifydata.slice(0, 3)" class="item">
          {{note.note}}
        </li>
      </ul>
    </section>
</template>


<script>
import notifydata from '@/data/notifications.json';

export default {
  name: 'notifications',
    data() {
        return {
            notifydata
        }
  }
}

</script>

<style scoped>
section.notify {
  background: rgba(0,0,0,.1);
  padding: 1rem;
  overflow:auto;
}
</style>
