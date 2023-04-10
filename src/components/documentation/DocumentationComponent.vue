<script setup>
import { RouterLink } from 'vue-router'
import FrontMiniIcon from '@/components/icons/FrontMiniIcon.vue'
</script>
<template>
    <div class="documentation">
        <div class="header-block">
            <h1>Working with the application</h1>
            <p class="b-1-regular">
                Place gaming applications on the EXE.ru website using the dev.exe.ru platform for
                developers. Thousands of players and only the best games on EXE.ru. Start making
                money right now! Iframe applications supported by browsers are available on the
                EXE.ru game portal. To exchange data with the EXE.ru platform, you need to integrate
                the Javascript API methods into the game application.
            </p>
        </div>
        <div class="content-block">
            <div class="block-item">
                <h4>
                    <router-link :to="{ name: 'Placing' }"
                        >Placing the game
                        <front-mini-icon />
                    </router-link>
                </h4>
                <div class="item-content b-1-regular">
                    <p>
                        Games hosted on the EXE.ru game portal are integrated within the site using
                        an IFrame-window customizable by the developer. All methods of the Game and
                        Payment API are available to the Games.
                    </p>
                    <ul>
                        <li>Add the game to the site</li>
                        <li>Specify game settings and iframe container parameters</li>
                        <li>Download game icons and covers</li>
                        <li>Assign roles in game management</li>
                        <li>Send an application for placing the game on the site</li>
                    </ul>
                </div>
            </div>
            <div class="block-item">
                <h4>
                    <router-link to=""
                        >Accommodation conditions
                        <front-mini-icon />
                    </router-link>
                </h4>
                <div class="item-content b-1-regular">
                    <p>
                        Rules for posting games on the EXE.ru website. Please read the terms of
                        posting games before using the EXE.ru game portal API.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/documentation.scss';
</style>
