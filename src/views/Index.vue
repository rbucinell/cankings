<script setup>
import CKLocation from '../components/CKLocation.vue';
</script>

<template>
    <div class="container mx-auto p-1">
        <div class="carousel w-full md:w-1/2  mx-auto">
            <div class="carousel-itme relative w-full" id="slide1">
                <img src="assets/img/cankingsbanner.png" class="w-full" />
            </div>
        </div>

        <p class="mx-auto text-lg m-4">We offer walk-in service, fundraisers, bottle drives, and a commercial pickup
            service. All brands accepted with no limits on quantity. <br> No sorting or counting required, we do all the
            work and
            make it easy for you.</p>
        <div class="flex justify-center flex-wrap">
            <CKLocation label="Fairport" address="1276 Fairport Rd, Fairport NY 14450" phone="585-576-2790"
                map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2913.116906384995!2d-77.462825!3d43.102058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6ccacec614b31%3A0xb4ecd226513e0313!2sCan%20Kings%3A%20Bottle%20and%20Can%20Redemption%20Center!5e0!3m2!1sen!2sus!4v1656433900714!5m2!1sen!2sus" />
            <CKLocation label="Webster" address="1183 Bay Rd, Webster, NY 14580" phone="585-802-5616"
                map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.7469139707628!2d-77.50986868402784!3d43.193820979139815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6c97101ce783b%3A0xe5a477638f20cd5d!2sCan%20Kings%3A%20Bottle%20and%20Can%20Redemption%20Center!5e0!3m2!1sen!2sus!4v1656434505314!5m2!1sen!2sus" />
            <CKLocation label="Palmyra" address="505 East Main St., Palmyra, NY 14522" phone="315-690-6174"
                map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.9338603761275!2d-77.24732898455974!3d43.06385857914591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d12b268f214ac1%3A0x45e6b5a95eeb8f0b!2sCan%20Kings%3A%20Bottle%20and%20Can%20Redemption%20Center!5e0!3m2!1sen!2sus!4v1656439212793!5m2!1sen!2sus" />
        </div>
    </div>
</template>

<style scoped>
</style>
