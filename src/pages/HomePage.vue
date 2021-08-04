<template>
  <div class="component">

  <div class="row ">
    <div class="col-md-12 py-3 bg-primary text-center text-light text-shadow">
      <h2>Picture of the Day</h2>
      </div> 
    </div>
  <div class="col-md-12">
    <PictureList />
  </div>
  <div class="col-md-10 offset-1">
    <PictureDetails />
  </div>
</div>
</template>


<script>
import { reactive } from "vue"
import PictureList from '../components/PictureList.vue'
import PictureDetails from '../components/PictureDetails..vue'

export default {
  name: 'HomePage',
    setup(){
      console.log('loading home page')
      const state = reactive({

      })
    return { state }
  },
  components:{PictureList, PictureDetails }
};
</script>


<style scoped>
.img-fluid{
  height: 5vh;
}

</style>