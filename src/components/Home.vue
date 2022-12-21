<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.imageSrc"
            >
              <div class="car-link">
                <v-btn
                  class="error"
                  :to="'/ad/' + ad.id"
                >{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad of ads"
          :key="ad.id"
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              :src="ad.imageSrc"
              height="200px"
            ></v-img>

            <v-card-title>
              {{ ad.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ ad.description }}
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                :to="'/ad/' + ad.id"
              >Open</v-btn>

              <v-btn
                color="primary"
                raised
                text
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'TOYOTA CRESTA',
          description: 'This car is really amazing',
          promo: true,
          imageSrc: 'https://papik.pro/uploads/posts/2021-12/1640701672_25-papik-pro-p-anime-risunki-vinil-25.jpg',
          id: '001'
        },
        {
          title: 'SUBARU BRZ',
          description: 'This car is really amazing',
          promo: true,
          imageSrc: 'https://i.pinimg.com/originals/b3/23/b8/b323b8783e8f0f8786b28f0688e08493.png',
          id: '002'
        },
        {
          title: 'MAZDA RX-7',
          description: 'This car is really amazing',
          promo: true,
          imageSrc: 'https://i.pinimg.com/originals/e8/f6/07/e8f6076e4666138c5dee34ee9a7c1581.jpg',
          id: '003'
        },
        {
          title: 'TOYOTA MARK 2',
          description: 'This car is really amazing',
          promo: true,
          imageSrc: 'https://w.wallhaven.cc/full/57/wallhaven-57zmo5.png',
          id: '004'
        },
        {
          title: 'NISSAN SILVIA S15',
          description: 'This car is really amazing',
          promo: true,
          imageSrc: 'https://pibig.info/uploads/posts/2021-04/1619173161_26-pibig_info-p-anime-drift-anime-krasivo-28.jpg',
          id: '005'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .car-link{
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0,0,0 .5);
    transform: translate(-50%, 0);
    padding: 10px 20px;
    border-radius: 5px;
  }
</style>
