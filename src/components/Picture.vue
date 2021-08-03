<template>
  <div class="picture row">
    <div class="col-12">
<img :src="movie.picture" alt="NASA pod" class="img-fluid">
    </div>
    <div class="col-12 textl-center">
      <button>Get a New Picture</button>
    </div>

  </div>
</template>


<script>
export default {
  name: 'picture',
  setup(){
    return {}
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>