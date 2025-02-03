<template>
  <q-page class="flex flex-top">
    <h4>Congradulations you have matched with:</h4>
    <h4>{{ randomPerson }}</h4>
    <h4>
      you both want to do at on
      {{ this.selectedDate }}
    </h4>
  </q-page>
</template>

<script setup>
//
</script>

<script>
var peopleNames = []
peopleNames[0] = 'John'
peopleNames[1] = 'Alex'
peopleNames[2] = 'Kevin'
peopleNames[3] = 'Fred'
peopleNames[4] = 'Sammy'

//var peoplePicures

const randomIndex = Math.floor(Math.random() * peopleNames.length)
var randomPerson = peopleNames[randomIndex]

var date = this.this.$route.query.date
console.log(date)
</script>
