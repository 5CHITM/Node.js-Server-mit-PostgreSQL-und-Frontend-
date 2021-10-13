<template>
  <div>
    <CarCards :cars="cars" @deleteThisCar="deleteCar"></CarCards>
  </div>
</template>

<script>
import CarCards from '@/components/CarCards.vue';
export default {
  name: 'Home',
  props: {
    cars: {
      type: Array,
    },
  },
  components: {
    CarCards,
  },
  methods: {
    deleteCar(value) {
      return this.$emit('deleteThisCar', value);
    },
  },
};
</script>
