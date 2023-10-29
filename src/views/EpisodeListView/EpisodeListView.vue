<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/iframe-has-title -->
<template>
  <div class="EpisodeListView">
    <h1>Código Fílmico</h1>
    <h2>El podcast donde programadores ponemos a caldo películas cada vez que en ellas se enciende un ordenador.</h2>
    <h5 class="EpisodeListView__version">Versión 1</h5>
    <EpisodeItem
      title="Steve Jobs (2015)"
      version="v1.1.0"
      image="steve_jobs_miniature.jpg"
      description="En este episodio hablamos sobre la película Steve Jobs (2015) y nos enfrascamos en una pequeña batalla con el único de nuestros colaboradores que esgrimía un móvil con SO Android. También podéis escuchar al gran Antonio Huerta que nos ha acompañado en este primer programa. "
      spotifyLink="https://spotify.link/jmMuLwPckDb"
      applePodcastLink="https://podcasts.apple.com/es/podcast/v1-1-0-steve-jobs-2015/id1708606379?i=1000628838482"
      youtubeLink="https://www.youtube.com/watch?v=PkPRAOx6E1o&t=39s"
    >
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/episode/28MOONOnGs1sx0T4mCaEIg?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </EpisodeItem>
    <hr />
    <FooterItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EpisodeItem from '@/components/EpisodeItem/EpisodeItem.vue';
import FooterItem from '@/components/FooterItem/FooterItem.vue';

export default defineComponent({
  name: 'EpisodeListView',
  components: {
    EpisodeItem,
    FooterItem,
  },
});
</script>

<style scoped lang="sass">
    @import './EpisodeListView'
</style>
