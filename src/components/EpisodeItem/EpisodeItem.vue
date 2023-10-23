<template>
  <section class="EpisodeItem">
    <div class="EpisodeItem__header">
      <img
        class="EpisodeItem__image"
        :src="require(`@/assets/film/${image}`)"
        :alt="`{title}`"
      >
      <div class="EpisodeItem__titleBlock">
        <h3>{{title}}</h3>
        <h4 class="EpisodeItem__version">{{version}}</h4>
      </div>
    </div>
    <p>{{description}}</p>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EpisodeItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
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
    @import './EpisodeItem'
</style>
