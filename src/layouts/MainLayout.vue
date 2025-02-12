<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Shuttle Buddy </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Pages </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: 'https://shuttlebuddy.netlify.app/#/home',
  },
  {
    title: 'Profile',
    icon: 'account_circle',
    link: 'https://shuttlebuddy.netlify.app/#/profile',
  },
  {
    title: 'Log out and Login',
    icon: 'logout',
    link: 'https://shuttlebuddy.netlify.app/#/login',
  },
  {
    title: 'Log out and SignUp',
    icon: 'logout',
    link: 'https://shuttlebuddy.netlify.app/#/signup',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: 'https://shuttlebuddy.netlify.app/#/settings',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
