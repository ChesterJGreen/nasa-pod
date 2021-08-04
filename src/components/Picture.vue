<template>
  <div @submit.prevent="setActivePicture" class="picture row">
    <div class="col-4">
      <img :src="picture.url" alt="" class="img-fluid">
    </div>
    <div class="col-8">
      <div>{{picture.title}}</div>
      <div class="text-warning">{{picture.explanation}}</div>
    </div>
  </div>
</template>


<script>
import { reactive } from 'vue';
import { Picture } from '../models/Picture';
import { picturesService } from '../services/picturesService';
export default {
  name: 'Picture',
  props: { picture:{type: Picture, required: true}},
  setup(props){
const state = reactive({
})
    return { state,
    setActivePicture(){
      picturesService.setActivePicture(props.picture)
    }
    }
  }
};
</script>


<style scoped>
.picture:hover{
  color: aqua;
  transform: scale(1.1);
  cursor: pointer;
}
</style>