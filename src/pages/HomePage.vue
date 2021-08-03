<template>
  <div class="component">
<div class="container-fluid">
  <div class="row "><div class="col-md-12 py-3 bg-primary text-center text-light text-shadow"><h2>NASA Picture of the Day</h2></div> </div>
  <div class="col-12">
    <Picture/>
  
  </div>
</div>

  </div>
</template>


<script>
import { reactive } from "@vue/reactivity"

export default {
  name: 'HomePage',
    setup(){
      const state = reactive({

      })
    return { state }
  },
  components:{}
}
</script>


<style scoped>
.img-fluid{
  height: 5vh;
}
</style>