<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/iframe-has-title -->
<template>
  <div class="EpisodeListView">
    <div class="EpisodeListView__content">
      <h1>Código Fílmico</h1>
      <h2>El podcast donde programadores ponemos a caldo películas cada vez que en ellas se enciende un ordenador.</h2>
      <h5 class="EpisodeListView__version">Versión 1</h5>
      <EpisodeItem
        title="Steve Jobs (2015)"
        version="v1.1.0"
        image="steve_jobs_miniature.jpg"
        description="En este episodio hablamos sobre la película Steve Jobs (2015) y nos enfrascamos en una pequeña batalla con el único de nuestros colaboradores que esgrimía un móvil con SO Android. También podéis escuchar al gran Antonio Huerta que nos ha acompañado en este primer programa."
        spotifyLink=""
        applePodcastLink=""
        youtubeLink=""
      >
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/episode/28MOONOnGs1sx0T4mCaEIg?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </EpisodeItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EpisodeItem from '@/components/EpisodeItem/EpisodeItem.vue';

export default defineComponent({
  name: 'EpisodeListView',
  components: {
    EpisodeItem,
  },
});
</script>

<style scoped lang="sass">
    @import './EpisodeListView'
</style>
