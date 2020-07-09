<template>
<section>
  <h3>Notifications: {{notify.length}}</h3>
      <ul>
          <li v-for="note in notify.slice(0, 3)" v-bind:key="index" class="item">
          {{note.note}}
        </li>
      </ul>
    </section>
</template>


<script>
import notify from '@/data/notifications.json';

export default {
  name: 'notifications',
    data() {
        return {
            notify
        }
  }
}

</script>
