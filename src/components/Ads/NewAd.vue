<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm-3>
                <h1 class="text--secondary mb3">Create new ad</h1>
                <v-form ref="form"
                        class="mb-3"
                        v-model="valid"
                        validation>
                    <v-text-field
                            name="title"
                            label="Ad title"
                            type="text"
                            v-model="title"
                            :rules="[v => !!v || 'Title is required']"
                            required
                    ></v-text-field>
                    <v-text-field
                            name="description"
                            label="Ad description"
                            type="text"
                            v-model="description"
                            :rules="[v => !!v || 'Description is required']"
                            multi-line
                    ></v-text-field>
                </v-form>
                <v-layout row mb-3>
                    <v-flex xs12>
                        <v-btn>
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" height="100">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                v-model="promo"
                                label="Add to promo"
                                color="primary"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                class="success"
                                @click="createAd"
                                :disabled="!valid"
                        >Create ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    export default {
        data() {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false,
            }
        },
        methods: {
            createAd() {
                if(this.$refs.form.validate()) {
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        imageSrc: 'https://artemdemo.me/wp-content/uploads/2016/10/Vuejs-logo-300x208.png'

                    }
                    this.$store.dispatch('createAd', ad)
                }
            }
        }
    }
</script>
