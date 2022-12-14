<template>
  <v-container>
    <v-card max-width="1000" class="mx-auto" elevation="0">
      <v-card-title>
      <v-text-field
        v-model="word"
        outlined
        dense
        @keydown.enter="seacrh"
        placeholder="Search word you want"
        append-icon="mdi-magnify"
      ></v-text-field>
      </v-card-title>
      <v-card-title>{{ showWord.word }}</v-card-title>
      <v-card-title>{{ showWord.phonetic }}</v-card-title>
      <v-card-text>
        <!-- <audio ref="audioUI" autoplay controls>
          <source :src="showWord.phonetics[0].audio" type="audio/mpeg" />
        </audio> -->
        <v-row hidden>
          <v-col
            v-for="data in showWord.phonetics"
            :key="data.id"
            cols="12"
            md="3"
            sm="4">
            <div>
              <!-- <p>{{ data.text }}</p> -->
              <audio id="play" controls>
                <source :src="data.audio" type="audio/mpeg" />
              </audio>
            </div>
          </v-col>
        </v-row>
        <v-btn color="success" icon @click="audio"> <v-icon>mdi-volume-high</v-icon> </v-btn>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col v-for="data in showWord.meanings" :key="data.id" cols="12">
            <v-card-title>{{ data.partOfSpeech }}</v-card-title>
            <v-card-text>
              <v-row>
                <v-col v-for="item in data.definitions" :key="item.id" cols="12">
                  <p>{{
                    item.definition 
                  }}</p>
                  <p >{{
                    item.example}}</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="pa-10">
        <h1 class="text-center pb-10">synonyms</h1>
        <v-row>
          <!-- <v-col v-for=" data in showWord.meanings[0].synonyms" :key="data.id" cols="12" md="3" sm="3">
            {{data}}
          </v-col> -->
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      word: "",
    };
  },

  computed: {
    showWord() {
      return this.$store.state.word.word;
    },
  },
  methods: {
    seacrh() {
      this.$store.dispatch("word/getWord", this.word);
    },
    audio() {
      document.getElementById("play").play(); 
    }
  },
};
</script>
