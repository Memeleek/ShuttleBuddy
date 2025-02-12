<template>
  <q-page class="flex flex-top">
    <div>
      <h3 display:block>Plan Your Trip</h3>

      <q-form name="myform" id="myform" action="" class="q-gutter-y-md" method="get">
        <h6>When do you want to go?</h6>
        <q-date v-model="selectedDate" minimal=""></q-date>
        <h6>What do you want to do?</h6>
        <q-select
          id="activity"
          filled
          label="Acitivty"
          :options="activityOptions"
          v-model="activity"
        >
        </q-select>
        <h6>Where do you want to go?</h6>
        <q-select
          id="location"
          filled
          label="Location"
          :options="locationOptions"
          v-model="location"
        >
        </q-select>
      </q-form>

      <GoogleMap
        api-key="AIzaSyDsD2l82ML5B58BJIq53uvYHucmqyicM0o"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="11"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>

      <q-btn @click="handleClick">Match</q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const center = { lat: 39.7983785, lng: -105.8189844 }

const activity = ref('')
const location = ref('')
const activityOptions = ['Shuttled Skiing', 'Shuttled Biking', 'Resort Skiing', 'Resort Biking']
const locationOptions = ['Loveland Pass', 'Berthoud Pass']
const selectedDate = ref(null)
const router = useRouter()
const information = computed(() => {
  return activity.value + ' at ' + location.value + ' on ' + selectedDate.value
})

const handleClick = function () {
  console.log('match button clicked')
  console.log(activity.value)
  console.log(selectedDate.value)
  console.log(information.value)
  router.push({ path: 'match', query: { d: information.value } })
}
</script>
