<template>
  <v-container>
    <v-layout row pt-10>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary pb-3">Orders</h1>
        <v-list
          flat
          subheader
          three-line
        >
          <v-list-item-group
            multiple
          >
            <v-list-item
              v-for="order in orders"
              :key="order.id"
            >
              <template>
                <v-list-item-action>
                  <v-checkbox
                  @change="markDone(order)"
                  :input-value="order.done"
                  color="orange"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    :to="'/ad/' + order.adId"
                    class="primary"
                  >Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'gf235',
          name: 'Misha',
          phone: 84324500595,
          adId: '0123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>

<style scoped>
</style>
