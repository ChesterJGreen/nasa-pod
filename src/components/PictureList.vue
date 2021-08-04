<template>
  <div class="PictureList">
    <form @submit.prevent="getPictures" class="py-2">
      <input v-model="state.query" type="date" name="" id="" placeholder="please choose a day" />
      <button class="btn btn-info" @click="setActivePicture">View</button>
    </form>
    <div class="col-12">
      <Picture v-for="p in pictures" :key="p" :picture="p" />
    </div>
  </div>
</template>


<script>
import { computed, onMounted, reactive } from "vue";
import {picturesService} from '../services/PicturesService'
import { AppState } from "../AppState";
import Picture from '../components/Picture.vue'
export default {
  name: 'PictureList',
  setup(){
    console.log('loading picture list');
const state = reactive({
query: ''
});
onMounted(()=> {
  picturesService.getPictures()
});
  return {
    state,
    pictures: computed(()=> AppState.pictures),
    getPictures(){
      picturesService.getPictures(state.query)
    },
    setActivePicture(picture){
      picturesService.setActivePicture(picture)
    }
    }
  },
  components: {Picture}
}
</script>


<style scoped>
.image:hover{
    color: aqua;
    transform: scale(1.1);
    cursor: pointer;
}
</style>