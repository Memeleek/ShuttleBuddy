<template>
  <q-page>
    <div class="q-pa-md text-body1">
      <p>
        Congratulations you have matched with: <b>{{ randomPerson }}</b>
      </p>

      <p>
        You both want to do
        <b>{{ selectedDate }}</b>
      </p>
      <p>
        Click <b><a href="mailto:test@test.com">Here</a></b> to email <b>{{ randomPerson }}</b>
      </p>
      <q-btn to="plan" label="Back To Planning" outline color="primary" />
    </div>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive, ref } from 'vue'

const route = useRoute()
const selectedDate = ref('')
selectedDate.value = route.query.d

const peopleNames = reactive([])
peopleNames.push('John')
peopleNames.push('Alex')
peopleNames.push('Kevin')
peopleNames.push('Fred')
peopleNames.push('Sammy')
//const peoplePicures

const randomIndex = Math.floor(Math.random() * peopleNames.length)

const randomPerson = peopleNames[randomIndex]
//const randomPerson = 'John'
</script>
