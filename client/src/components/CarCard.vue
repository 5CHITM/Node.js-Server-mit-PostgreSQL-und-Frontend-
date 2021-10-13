<template>
  <v-card class="mx-auto" width="350">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img width="350" :src="car.image"></v-img>

    <v-card-title>{{ car.title }}</v-card-title>
    <div class="mx-2">
      <p>
        Owner: <strong>{{ car.first_name }} {{ car.last_name }}</strong>
      </p>
      <span>
        Year: <strong>{{ car.year_of_make }}</strong>
      </span>
      <br />
      <span>
        Miles: <strong>{{ car.miles }}</strong>
      </span>
      <br />
      <br />
      <p v-if="car.status === 'available'">
        Price: <strong>{{ car.price }}</strong>
      </p>
      <p v-else>Price: <strong>N/A</strong></p>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="white" class="red darken-4" text @click="deleteCar(car.id)">
        Delete
      </v-btn>
      <v-btn color="white" class="purple" text :to="{ name: 'Details', params: { id: car.id } }" v-if="car.status === 'available'">
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    car: Object,
  },
  methods: {
    deleteCar(value) {
      return this.$emit('deleteThisCar', value);
    },
  },

  created() {},
};
</script>
