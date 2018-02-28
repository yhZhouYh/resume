<template>
    <div>
        <v-btn fab dark color="indigo" @click.native="openDialog">
            <v-icon dark>add</v-icon>
        </v-btn>
        <v-dialog v-model="showDialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">基础配置</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs6>
                                <v-text-field label="技能名称" :name="fields.name" :value="fields.name" v-model="fields.name"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-slider  v-model="fields.value" thumb-label ></v-slider>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="showDialog = false">取消</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="ensure">确定</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
  name: 'basicBtn',
  props: {
    showBtn: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'basic'
    }
  },
  computed: {
    dialog() {
      return this.$store.state.dialogConfig
    }
  },
  data() {
    return {
      showDialog: false,
      fields: {
        name: '',
        value: ''
      }
    }
  },
  methods: {
    openDialog() {
      let fields = {
        name: '',
        value: ''
      }
      Object.assign(this.fields, fields) //重置
      this.showDialog = !this.showDialog
    },
    ensure() {
      this.showDialog = !this.showDialog
      if (this.fields.name) {
        this.$store.state.sliders.push({ ...this.fields })
        this.$store.dispatch('setSliders', [
          ...this.$store.state.sliders
        ])
      }
    }
  }
}
</script>
<style lang="less">
// .resume-dialog {
//   width: 40%;
// }
</style>
