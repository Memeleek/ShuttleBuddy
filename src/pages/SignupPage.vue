<template>
  <h2>Signup</h2>

  <img src="C:\dev\quasar-project2\public\Images\qjvjcl9w.png" alt="" />
  <q-page>
    <div class="q-pa-md">
      <q-form name="myform" id="myform" action="" method="get">
        <h5>Enter Your Email And Password Below</h5>
        <span>{{ information }}</span>
        <q-input filled v-model="email" label="Email" stack-label :dense="dense" />
        <q-input filled v-model="Password" label="Password" stack-label :dense="dense" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
const email = ref('')
const password = ref('')

const information = computed(() => {
  return email.value + password.value
})
</script>
