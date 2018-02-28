<template>
    <div class="sliders">
        <v-slider :label="item.name" v-model="item.value"  color="blue darken-3" thumb-label v-for="(item, index) in sliders" :key="index" @input="change(item)"></v-slider>
    </div>
</template>
<script>
export default {
  name: 'sliders',
  data() {
    return {}
  },
  computed:{
      sliders(){
          return this.$store.state.sliders
      }
  },
  methods: {
      change(item){
          this.$store.dispatch('setSliders', [
          ...this.$store.state.sliders
        ])
      }
  }
}
</script>
<style lang="less" scoped>

</style>

