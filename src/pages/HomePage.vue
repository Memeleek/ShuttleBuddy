<template>
  <q-page class="flex flex-center"> HomePage </q-page>

  <GoogleMap
    api-key="AIzaSyDsD2l82ML5B58BJIq53uvYHucmqyicM0o"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 40.689247, lng: -74.044502 }
</script>
