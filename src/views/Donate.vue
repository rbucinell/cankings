<script setup>
import CKLocation from '../components/CKLocation.vue';
import CKHero from '../components/CKHero.vue';

document.title = 'Can Kings - Donate'
</script>

<template>
    <div class="container mx-auto p-1">
        <CKHero />
        <div class="card card-side mb-4">
            <div class="card-body">
                <h2 class="card-title">Donate</h2>
                <p class="lg:text-lg">Don't have a lot of time or just want to help a non-profit organization? Then donating is a great option. Simply bring your cans/bottles, select a recipient to donate to and we will do the rest.</p>
            </div>
            <figure>
                <img src="../assets/img/donate.jpg" class="w-32 rounded" alt="recycling logo">
                <!-- <svg class="absolute left-1/2 right-32" viewBox="0 0 640 640">  <path d="M312.5,80.591V15H325c4.143,0,7.5-3.358,7.5-7.5S329.143,0,325,0H145c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h12.5 v65.591c-22.641,3.606-40,23.269-40,46.909v305c0,20.678,16.822,37.5,37.5,37.5h160c20.678,0,37.5-16.822,37.5-37.5v-305 C352.5,103.86,335.141,84.198,312.5,80.591z M337.5,432.5c0,12.407-10.094,22.5-22.5,22.5H155c-12.406,0-22.5-10.093-22.5-22.5 v-305c0-17.92,14.579-32.5,32.5-32.5c4.143,0,7.5-3.358,7.5-7.5V15h125v72.5c0,4.142,3.357,7.5,7.5,7.5 c17.921,0,32.5,14.58,32.5,32.5V432.5z"/> <path d="M305.072,227.5h-140c-4.141,0-7.498,3.356-7.5,7.497l-0.072,187.5c-0.001,1.99,0.789,3.898,2.195,5.305 c1.407,1.407,3.315,2.198,5.305,2.198h140c4.141,0,7.498-3.356,7.5-7.497l0.03-78.75c0.002-4.142-3.354-7.501-7.497-7.503 c-4.144,0-7.501,3.356-7.503,7.497L297.503,415h-125l0.066-172.5h125l-0.027,71.247c-0.002,4.142,3.354,7.501,7.497,7.503 c4.144,0,7.501-3.356,7.503-7.497l0.03-78.75c0.001-1.99-0.789-3.898-2.195-5.305C308.97,228.291,307.062,227.5,305.072,227.5z"/>  </svg> -->
            </figure>
        </div>
         <div class="card mb-4">
            <div class="card-body">
                <h2 class="card-title">Non-Profits</h2>
                <ul class="flex flex-row flex-wrap justify-center">
                    <li class="flex-auto"><a href="https://rmhc.org/" target="_blank"><img src="../assets/img/nonprofits/rmhc.png"       class="m-2 w-32 h-16 rounded mx-auto" alt="ronald mcdonald house logo" /></a></li>
                    <li class="flex-auto"><a href="https://nationalbreastcancer.org/" target="_blank"><img src="../assets/img/nonprofits/nbcf.png"       class="m-2 w-32 h-16 rounded mx-auto" alt="national breast cancer foundation logo" /></a></li>
                    <li class="flex-auto"><a href="https://redcross.org/" target="_blank"><img src="../assets/img/nonprofits/arc.png"        class="m-2 w-32 h-16 rounded mx-auto" alt="american red cross logo" /></a></li>
                    <li class="flex-auto"><a href="https://worldwildlife.org/" target="_blank"><img src="../assets/img/nonprofits/wwf-logo.png"   class="m-2 w-32 h-16 rounded mx-auto" alt="world wildlife foundation logo" /></a></li>
                    <li class="flex-auto align-middle"><p>And many local <br> charities as well!</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>