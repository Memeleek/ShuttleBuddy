<template>
  <q-page>
    <div class="q-pa-md">
      <h2>Signup</h2>
      <q-form name="myform" id="myform" action="" method="get">
        <h5>Enter Your Email And Password Below</h5>
        <span>{{ information }}</span>
        <q-input class="q-mb-md" filled v-model="email" label="Email" stack-label :dense="dense" />
        <q-input
          class="q-mb-md"
          filled
          v-model="Password"
          label="Password"
          stack-label
          :dense="dense"
        />
        <q-btn class="q-mb-md" to="info" label="Next" outline color="primary" />
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
