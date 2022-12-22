<template>
  <v-container>
    <v-layout pt-10>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form class="mb-3"
          ref="form"
          v-model="valid"
          validation
        >
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            outlined
            v-model="title"
            :rules="[v => !!v || 'Title is required!']"
          ></v-text-field>

          <v-textarea
            multi-line
            label="Description"
            name="description"
            outlined
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required!']"
          ></v-textarea>
        </v-form>
        <v-layout mb-3>
          <v-flex xs12>
            <v-btn
              color="blue-grey"
              class="warning"
            >
              Upload
              <v-icon
                right
                dark
              >
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="" height="150">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-switch
              color="primary"
              v-model="promo"
              inset
              label="Add to promo"
            >
            </v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createAd"
            >Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }
        console.log(ad)
      }
    }
  }
}
</script>

<style scoped>

</style>
