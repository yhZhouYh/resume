<template>
    <div>
       <v-text-field v-for="(item, index) in fields" :name="item.name" :label="item.name" :value="item.value" :key="index"></v-text-field>
    </div>
</template>
<script>
export default {
  name: 'fields',
  data() {
    return {
    }
  },
  computed:{
    fields(){
      return this.$store.state.basicFields
    }
  }
}
</script>
<style lang="less">
  
</style>
