<style>
</style>

<script setup>
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/vue/outline'
import { computed } from '@vue/runtime-core'
const props = defineProps(['label', 'address', 'phone', 'map'])
const toTel = computed(()=> `tel:${props.phone}`)
console.log(props)


</script>

<template>
  <div class="card bg-base-100 shadow-xl m-2 border-solid border-2 border-ckgreen_light_2">

    <div class="card-body items-start">
      <h2 class="card-title"> {{label}}</h2>
      <p class="grow-0">
        <LocationMarkerIcon class="h-6 inline mr-1" />
        <span>{{address}}</span>
      </p>
      <p class="grow-0"><PhoneIcon class="h-6 inline mr-1"/><a :href="toTel">{{phone}}</a></p>
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