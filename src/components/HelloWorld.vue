<script setup>
import CKLocation from './CKLocation.vue';
</script>

<template>

  <div class="container mx-auto p-1">
    <div class="carousel w-full md:w-1/2  mx-auto">
      <div class="carousel-itme relative w-full" id="slide1">
        <img src="assets/img/cankingsbanner.png" class="w-full" />
      </div>
    </div>

    <p class="max-w-lg mx-auto text-lg">We offer walk-in service, fundraisers, bottle drives, and a commercial pickup
      service. All brands accepted with no limits on quantity. No sorting or counting required, we do all the work and
      make it easy for you.</p>
    <div class="flex justify-center flex-wrap">
      <CKLocation label="Fairport" address="1276 Fairport Rd, Fairport NY 14450"  phone="585-576-2790" map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2913.116906384995!2d-77.462825!3d43.102058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6ccacec614b31%3A0xb4ecd226513e0313!2sCan%20Kings%3A%20Bottle%20and%20Can%20Redemption%20Center!5e0!3m2!1sen!2sus!4v1656433900714!5m2!1sen!2sus"  />
      <CKLocation label="Webster"  address="1183 Bay Rd, Webster, NY 14580"       phone="585-802-5616" map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.7469139707628!2d-77.50986868402784!3d43.193820979139815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6c97101ce783b%3A0xe5a477638f20cd5d!2sCan%20Kings%3A%20Bottle%20and%20Can%20Redemption%20Center!5e0!3m2!1sen!2sus!4v1656434505314!5m2!1sen!2sus"  />
      <CKLocation label="Palmyra"  address="505 East Main St., Palmyra, NY 14522" phone="315-690-6174" map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.939475789426!2d-77.22795208403095!3d43.063740479145956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d12ac59b42c9c3%3A0x8ac6a1f05b3756aa!2s505%20E%20Main%20St%2C%20Palmyra%2C%20NY%2014522!5e0!3m2!1sen!2sus!4v1656434559886!5m2!1sen!2sus"  />
    </div>
  </div>



  <!--<h1 class="text-ckgreen hover:text-ckgreen_dark_2 text-3xl font-bold underline">{{ msg }}</h1>
  <button class="btn btn-primary">Button</button>
  <div class="alert alert-success shadow-lg"><span>Hello world</span>>
  </div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
