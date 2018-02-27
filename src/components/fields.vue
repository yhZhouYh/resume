<template>
    <div class="fields-container">
         <v-text-field class="basic-fields" v-for="(item, index) in fields" :key="index" :name="item.name" :label="item.name" :value="item.value" append-icon="delete" :append-icon-cb="()=>{deleteItem(index)}"></v-text-field>
    </div>
</template>
<script>
export default {
  name: "fields",
  data() {
    return {};
  },
  computed: {
    fields() {
      return this.$store.state.basicFields;
    }
  },
  methods: {
    deleteItem(index) {
      let fields = this.fields;
      fields.splice(index, 1);
      this.$store.dispatch("setBasicFields", [
        ...this.fields
      ]);
    }
  }
};
</script>
<style lang="less">
.basic-fields {
  .icon {
    display: none;
  }
  &:hover {
    .icon {
      display: block;
    }
  }
  &:focus {
    .icon {
      display: block;
    }
  }
}
</style>
