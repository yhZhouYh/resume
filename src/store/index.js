import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import dialogConfig from './dialogConfig'

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
    ],
    sliders: JSON.parse(sessionStorage.getItem('sliders'))||[
      {
        name: 'js',
        value: 80
      },
      {
        name: 'css',
        value: 80,
      },
      {
        name: 'html',
        value: 80
      }
    ],
    dialogConfig
  },
  mutations: {
    [types.SET_BASIC_FIELDS](state, field) {
      state.basicFields = field
      sessionStorage.setItem('basicFields', JSON.stringify(state.basicFields))
    },
    [types.SET_SLIDERS](state, obj) {
      state.sliders = obj
      sessionStorage.setItem('sliders', JSON.stringify(state.sliders))
    },
  },
  actions: {
    setBasicFields({ commit }, field) {
      commit(types.SET_BASIC_FIELDS, field)
    },
    setSliders({ commit }, obj) {
      commit(types.SET_SLIDERS, obj)
    }
  }
})
