<template>
  <div class="SocialMedia">
    <a class="SocialMedia__link" :href="spotifyLink">
      <img
          class="SocialMedia__icon"
          :src="require('@/assets/icons/spotify-square-color-icon.png')"
          alt="Escuchar en Spotify"
        >
    </a>
    <a class="SocialMedia__link" :href="applePodcastLink">
      <img
          class="SocialMedia__icon"
          :src="require('@/assets/icons/apple-podcasts-icon.png')"
          alt="Escuchar en Spotify"
        >
    </a>
    <a class="SocialMedia__link" :href="youtubeLink">
      <img
          class="SocialMedia__icon"
          :src="require('@/assets/icons/youtube-app-icon.png')"
          alt="Escuchar en Spotify"
        >
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialMedia',
  props: {
    spotifyLink: {
      type: String,
      required: true,
    },
    applePodcastLink: {
      type: String,
      required: true,
    },
    youtubeLink: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="sass">
    @import './SocialMedia'
</style>
