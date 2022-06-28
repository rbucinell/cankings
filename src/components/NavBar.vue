<template>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full navbar">
                <div class="flex-none md:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div class="flex-1 px-2 mx-2 justify-end md:justify-start">
                    <a class="btn btn-ghost normal-case text-xl">
                        <img class="w-6 rounded" src="../assets/img/cankingslogo.png" />
                        <span>Can Kings</span>
                    </a>
                </div>
                <div class="flex-none hidden md:block">
                    <ul class="menu menu-horizontal">
                        <li class="hover:text-ckgreen hover:font-semibold"><a>Services</a></li>
                        <li class="hover:text-ckgreen hover:font-semibold"><a>Donate</a></li>
                        <li class="hover:text-ckgreen hover:font-semibold"><a>Promotions</a></li>
                        <li class="hover:text-ckgreen hover:font-semibold"><a>Feedback</a></li>
                        <li class="hover:text-ckgreen hover:font-semibold"><a>About</a></li>
                    </ul>
                </div>
            </div>
            <!-- Page content here -->
            <slot>Content</slot>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <!-- Sidebar content here -->
                <li><a>Home</a></li>
                <li><a>Services</a></li>
                <li><a>Donate</a></li>
                <li><a>Promotions</a></li>
                <li><a>Feedback</a></li>
                <li><a>About</a></li>
            </ul>

        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style>
</style>