<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="col-lg-10 offset-1" v-if="tour">
        <img 
          class="mb-4 w-100" 
          :src="require(`@/assets/img/${tour.image}`)" 
          :alt="tour.title"
        >
        <h2>{{ tour.title }}</h2>
        <div class="description">
          {{ tour.fullDescription }}
        </div>
        <router-link to="/" class="btn btn-outline-dark mt-4">
          ← Назад к списку туров
        </router-link>
      </div>
      
      <div v-else class="col-lg-10 offset-1 text-center">
        <h2>Тур не найден</h2>
        <p>Возможно, вы перешли по неверной ссылке.</p>
        <router-link to="/" class="btn btn-outline-dark">
          На главную
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TourSingleView',
  computed: {
    tourId() {
      return this.$route.params.id;
    },
    tour() {
      return this.$store.getters.getTourById(this.tourId);
    }
  }
}
</script>