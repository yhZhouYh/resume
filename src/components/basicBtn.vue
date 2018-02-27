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
                                <v-text-field label="标题" :name="fields.name" :value="fields.value"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="内容" :name="fields.name" :value="fields.value"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="openDialog = false">取消</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="ensure">确定</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- <md-dialog :md-active.sync="showDialog" class="resume-dialog">
            <md-dialog-title>基础配置</md-dialog-title>
            <div class="container md-layout">

                <md-field class="md-layout-item md-size-35">
                    <label>标题</label>
                    <md-input v-model="fields.name"></md-input>
                </md-field>
                <md-field class="md-layout-item md-size-100">
                    <label>内容</label>
                    <md-input v-model="fields.value"></md-input>
                </md-field>
            </div>
            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">取消</md-button>
                <md-button class="md-primary" @click="ensure">确认</md-button>
            </md-dialog-actions>
        </md-dialog> -->
    </div>
</template>
<script>
export default {
  name: 'basicBtn',
  props: {
    showBtn: {
      type: Boolean,
      default: false
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
      console.log(this.fields)
      this.$store.dispatch('setBasicFields', { ...this.fields })
    }
  }
}
</script>
<style lang="less">
// .resume-dialog {
//   width: 40%;
// }
</style>
