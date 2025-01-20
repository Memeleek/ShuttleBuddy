<template>
  <q-page class="flex flex-top">
    HomePage

    <q-btn to="profile" label="Profile" outline color="purple" />
    <GoogleMap
      api-key="AIzaSyDsD2l82ML5B58BJIq53uvYHucmqyicM0o"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="11"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </q-page>
</template>

<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 39.7983785, lng: -105.8189844 }
</script>
