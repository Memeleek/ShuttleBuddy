<template>
  <q-page class="flex flex-top">
    <div>
      <h4 display:block>
        homepage <span><q-btn to="profile" label="Profile" outline color="purple" /></span>
      </h4>

      <q-form name="myform" id="myform" action="" class="q-gutter-y-md" method="get">
        <h5>Plan Your trip</h5>

        <q-date v-model="selectedDate" minimal=""></q-date>

        <q-select
          id="activity"
          filled
          label="Acitivty"
          :options="activityOptions"
          v-model="activity"
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
const activityOptions = ['Shuttled Skiing', 'Shuttled Biking', 'Resort Skiing', 'Resort Biking']
const selectedDate = ref(null)
const router = useRouter()
const information = computed(() => {
  return activity.value
})
const handleClick = function () {
  console.log('match button clicked')
  console.log(information.value)
  console.log(selectedDate.value)
  router.push({ path: 'match', query: { d: selectedDate.value } })
}
</script>
