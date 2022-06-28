<style>
</style>

<script setup>
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/vue/outline'
const props = defineProps(['label', 'address', 'phone', 'map'])

console.log(props)


</script>

<template>
  <div class="card bg-base-100 shadow-xl m-2 border-solid border-2 border-ckgreen_light_2">

    <div class="card-body place-content-start">
      <h2 class="card-title"> {{label}}</h2>
      <p class="grow-0 justify-start">
        <LocationMarkerIcon class="h-6 inline mr-1" />
        <span>{{address}}</span>
      </p>
      <p class="grow-0"><PhoneIcon class="h-6 inline mr-1"/><a v-bind:href="(phone)=> `tel:${phone}`">{{phone}}</a></p>
    </div>
      <figure>
        <iframe :src="map"
                width="400" 
                height="300" allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </figure>
  </div>
</template>