<template>
  <div>
    <v-card class="mx-auto" width="450">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>

      <v-img :src="car.image"></v-img>

      <v-card-title>{{ car.title }}</v-card-title>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">
              Price
            </th>
            <th class="text-left">
              Miles
            </th>
            <th class="text-left">
              Year of Make
            </th>
            <th class="text-left">
              Current Owner
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ car.price }}</td>
            <td>{{ car.miles }}</td>
            <td>{{ car.year_of_make }}</td>
            <td>{{ car.first_name }} {{ car.last_name }}</td>
          </tr>
        </tbody>
      </v-simple-table>
      <p class="mx-4 grey--text caption">{{ car.description }}</p>

      <v-card-actions>
        <v-btn color="white" class="deep-purple" text to="/">
          go back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="white" class="red darken-4" text @click="buyCar()" v-if="car.status === 'available'">
          order car
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      car: {},
    };
  },
  props: {
    id: {
      type: Number,
    },
  },
  components: {},
  methods: {
    async getCar(id) {
      try {
        const { data } = await axios({
          url: `http://127.0.0.1:3000/car/${id}`,
          method: 'get',
        });
        this.car = data[0];
      } catch (error) {
        console.error(error);
      }
    },
    async buyCar() {
      try {
        const { data } = await axios({
          url: `http://127.0.0.1:3000/car/${this.car.id}`,
          method: 'patch',
          contentType: 'application/json',
          data: {
            title: `${this.car.title} *RESERVED*`,
            status: 'reserved',
          },
        });
        // ToDo GetCar(id) damit die neuen Daten angezeigt werden
        return this.$emit('refresh', true);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    // this.car = this.cars.filter((car) => car.id === this.id)[0];
    this.getCar(this.id);
  },
};
</script>
