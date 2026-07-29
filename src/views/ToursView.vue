<template>
  <div class="wrapper mt-5">
    <div class="container">
      <h1 class="mb-4">Путешествия по России</h1>
      <div class="grid d-flex justify-content-between flex-wrap">
        <tour-card
          v-for="tour in tours"
          :key="tour.id"
          :tour="tour"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from '@/components/TourCard.vue'

export default {
  name: 'ToursView',
  components: {
    TourCard
  },
  computed: {
    tours() {
      return this.$store.getters.getAllTours
    }
  }
}
</script>