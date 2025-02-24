<template>
  <h2>Fill Out Your Information Below</h2>

  <q-page>
    <div class="q-pa-md">
      <q-form name="myform" id="myform" action="" class="q-gutter-y-md" method="get">
        <h5>Your Information</h5>
        <span>{{ information }}</span>
        <q-input filled v-model="name" label="Name" stack-label :dense="dense" />
        <q-input filled v-model="phone" label="Phone #" stack-label :dense="dense" />

        <q-input filled v-model="age" label="Age" stack-label :dense="dense" />
        <q-input filled v-model="address" label="Address" stack-label :dense="dense" />

        <q-select
          filled
          label="Skiing Level"
          :options="skiingLevelOptions"
          v-model="skiingLevel"
          id="SkiingLevel"
        >
        </q-select>

        <q-select
          id="BikingLevel"
          filled
          label="Biking Level"
          :options="bikingLevelOptions"
          v-model="bikingLevel"
        >
        </q-select>

        <q-select
          id="Car"
          filled
          label="Do You Have A Car Your Willing To Use?"
          :options="yesNoOptions"
          v-model="car"
        >
        </q-select>

        <q-select
          id="SkiingPass"
          filled
          label="What Skii Pass Do You Have?"
          :options="skiPassOptions"
          v-model="skiPass"
        >
        </q-select>

        <q-select
          id="bikePass"
          filled
          label="What Bike Park Pass Do You Have?"
          :options="bikePassOptions"
          v-model="bikePass"
        >
        </q-select>

        <q-select
          id="SkiRent"
          filled
          label="Do You Have To Rent Skis?"
          :options="yesNoOptions"
          v-model="skiRent"
        >
        </q-select>

        <q-select
          id="BikeRent"
          filled
          label="Do You Have To Rent A Bike?"
          :options="yesNoOptions"
          v-model="bikerent"
        >
        </q-select>
        <q-btn to="plan" label="Create Account" outline color="primary" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
const name = ref('')
const phone = ref('')
const age = ref('')
const address = ref('')
const skiingLevel = ref('')
const bikingLevel = ref('')
const car = ref('')
const skiPass = ref('')
const bikePass = ref('')
const skiRent = ref('')
const bikerent = ref('')

const information = computed(() => {
  return (
    name.value +
    phone.value +
    age.value +
    address.value +
    skiingLevel.value +
    bikingLevel.value +
    car.value +
    skiPass.value +
    bikePass.value +
    skiRent.value +
    bikerent.value
  )
})

const bikePassOptions = [
  'Tresle Bike Park',
  'Snowmass Bike Park',
  'Steamboat Resort Bike Park',
  'Beaver Creek Bike Park',
  'Copper Mountain Bike Park',
  'Crested Butte Bike Park',
  'Grandby Ranch Bike Park',
  'Keystone Bike Park',
  'Powderhorn Bike Park',
  'Purgatory Bike Park',
  'Vail Bike Park',
  'Breckenridge Bike Park',
  'Other Pass',
  'I dont have a Bike pass',
]
const skiPassOptions = [
  'Epic Pass',
  'Ikon Pass',
  'Indie Pass',
  'Other Local Pass',
  'I dont have a ski pass',
]
const yesNoOptions = ['Yes', 'No']
const bikingLevelOptions = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'I dont bike']
const skiingLevelOptions = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'I dont ski']
</script>
