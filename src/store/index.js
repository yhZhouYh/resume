import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basicFields: JSON.parse(sessionStorage.getItem('basicFields')) || [
      {
        name: '姓名',
        value: '小灰灰'
      },
      {
        name: '职业',
        value: '前端工程师'
      },
      {
        name: '电话',
        value: '15655140883'
      },
      {
        name: '邮箱',
        value: '450442918@qq.com'
      }
    ]
  },
  mutations: {
    [types.SET_BASIC_FIELDS](state, field) {
      state.basicFields = field
      sessionStorage.setItem('basicFields', JSON.stringify(state.basicFields))
    },
    // [types.DELETE_BASIC_FIELDS](state, field) {
    //   state.basicFields.push(field)
    //   sessionStorage.setItem('basicFields', JSON.stringify(state.basicFields))
    // }
  },
  actions: {
    setBasicFields({ commit }, field) {
      commit(types.SET_BASIC_FIELDS, field)
    }
  }
})
