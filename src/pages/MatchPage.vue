<template>
  <q-page class="flex flex-top">
    <div>
      <h4>Congratulations you have matched with:</h4>
      <h4>{{ randomPerson }}</h4>
      <h4>
        You both want to do
        {{ selectedDate }}
      </h4>
      <div><q-btn to="home" label="Home" outline color="purple" /></div>
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
