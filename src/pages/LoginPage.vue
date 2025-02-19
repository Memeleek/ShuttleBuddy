<template>
  <q-page>
    <div class="q-pa-md">
      <h2>Login</h2>
      <q-form name="myform" id="myform" action="" class="q-gutter-y-md" method="get">
        <h5>Enter Your Email And Password Below</h5>
        <span>{{ information }}</span>
        <q-input filled v-model="email" label="Email" stack-label :dense="dense" />
        <q-input filled v-model="Password" label="Password" stack-label :dense="dense" />
        <q-btn to="Home" label="Login" outline color="primary" />
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
