<template>
  <div class="PictureList">
    <form @submit.prevent="getPictures">
      <input v-model="state.query" type="text" name="" id="" placeholder="what day would you like to view?">
      <button class="btn btn-info" @click="setActivePicture">View</button>
    </form>
    <div class="col-12">
      <Picture v-for="p in pictures" :key="p" :picture="p" />


  </div>
</template>


<script>
import { computed, onMounted, reactive } from "@vue/reactivity"
import {picturesService} from '../services/picturesService'
import { AppState } from "../AppState";
import Picture from '../components/Picture.vue'
export default {
  name: 'PictureList',
  setup(){
const state = reactive({
query: ''
})
onMounted(()=> {
  picturesService.getPictures()
})
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