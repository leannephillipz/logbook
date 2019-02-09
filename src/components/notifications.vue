<template>
<section>
  <h4>Notifications: {{notify.length}}</h4>
      <ul>
          <li v-for="note in notify.slice(0, 3)" class="item">
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
