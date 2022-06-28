<script setup>
import CKLocation from '../components/CKLocation.vue';
import CKHero from '../components/CKHero.vue';
</script>

<template>
    <div class="container mx-auto p-1">
        <CKHero />

        <h1 class="text-5xl">Services</h1>
        <div class="card card-side bg-base-100 shadow-xl mb-4">
            <div class="card-body">
                <h2 class="card-title">Can/bottle Recycling</h2>
                <p class="lg:text-lg">We accept anything with a NY 5¢ deposit. This indication is found on the tops of
            cans and on the lables of glass and plastic bottles.</p>
            </div>
            <figure>
                <img src="../assets/img/recycle.png" class="w-32 rounded" alt="recycling logo">
                <!-- <svg class="absolute left-1/2 right-32" viewBox="0 0 640 640">  <path d="M312.5,80.591V15H325c4.143,0,7.5-3.358,7.5-7.5S329.143,0,325,0H145c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h12.5 v65.591c-22.641,3.606-40,23.269-40,46.909v305c0,20.678,16.822,37.5,37.5,37.5h160c20.678,0,37.5-16.822,37.5-37.5v-305 C352.5,103.86,335.141,84.198,312.5,80.591z M337.5,432.5c0,12.407-10.094,22.5-22.5,22.5H155c-12.406,0-22.5-10.093-22.5-22.5 v-305c0-17.92,14.579-32.5,32.5-32.5c4.143,0,7.5-3.358,7.5-7.5V15h125v72.5c0,4.142,3.357,7.5,7.5,7.5 c17.921,0,32.5,14.58,32.5,32.5V432.5z"/> <path d="M305.072,227.5h-140c-4.141,0-7.498,3.356-7.5,7.497l-0.072,187.5c-0.001,1.99,0.789,3.898,2.195,5.305 c1.407,1.407,3.315,2.198,5.305,2.198h140c4.141,0,7.498-3.356,7.5-7.497l0.03-78.75c0.002-4.142-3.354-7.501-7.497-7.503 c-4.144,0-7.501,3.356-7.503,7.497L297.503,415h-125l0.066-172.5h125l-0.027,71.247c-0.002,4.142,3.354,7.501,7.497,7.503 c4.144,0,7.501-3.356,7.503-7.497l0.03-78.75c0.001-1.99-0.789-3.898-2.195-5.305C308.97,228.291,307.062,227.5,305.072,227.5z"/>  </svg> -->
            </figure>
        </div>
         <div class="card card-side bg-base-300 shadow-xl mb-4">
            <div class="card-body">
                <h2 class="card-title">Electronic Recycling</h2>
                 <div class="alert alert-warning shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <strong>Notice:</strong>
                <span>We are sorry to anounce we will no longer be accepting electronics at any of our locations</span>
            </div>
        </div>
            </div>
            <figure>
                <img src="../assets/img/recycle.png" class="w-32 rounded" alt="recycling logo">
                <!-- <svg viewBox="0 0 64 64"> <path d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546 c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481 s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469 c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z M19.995,21.1H7.448V3.373h12.547V21.1z"/> </svg> -->
            </figure>
        </div>
    </div>
</template>

<style scoped>
</style>