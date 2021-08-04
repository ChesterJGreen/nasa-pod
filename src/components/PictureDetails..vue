<template>
  <div class="PictureDetails row border border-secondary rounded p-2 mt-2">
    <h2 class="col-12">{{activePicture.title}}</h2>
    <div class="col-6">
      <img :src="activePicture.hdurl" alt="" srcset="" class="img-fluid">
    </div>
    <div class="col-6">{{activePicture.explanation}}</div>
  </div>
</template>


<script>
import { computed, reactive } from 'vue';
import { AppState } from '../AppState';
export default {
  name: 'PictureDetails',
  setup(){
const state = reactive({
})
    return { state,
    activePicture: computed(()=> AppState.activePicture)
    }
  }
};
</script>


<style scoped>
</style>