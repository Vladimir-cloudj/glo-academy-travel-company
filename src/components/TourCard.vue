<template>
  <router-link :to="{ name: 'tour', params: { id: tour.id } }" class="tour-link">
    <div class="item-wrapper d-flex flex-column mb-4">
      <img 
        :src="require(`@/assets/img/${tour.image}`)" 
        class="mb-3" 
        :alt="tour.title"
      >
      <h3>{{ tour.title }}</h3>
      <div class="description">
        {{ tour.description }}
        <br>
        <span>Читать далее ...</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'TourCard',
  props: {
    tour: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.tour-link {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s ease;
}

.tour-link:hover {
  transform: translateY(-4px);
}

.tour-link:hover h3 {
  text-decoration: underline;
}
</style>