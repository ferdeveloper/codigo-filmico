<template>
  <div class="FooterItem">
    <p>{{ footerText() }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterItem',
  setup() {
    const footerText = (): string => {
      const currentYear = new Date().getFullYear();

      return `@ferdeveloper - ${currentYear}`;
    };

    return {
      footerText,
    };
  },
});
</script>

<style scoped lang="sass">
    @import './FooterItem'
</style>
