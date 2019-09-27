import { startData } from '../services/index'

const name='startData'

const state = {
  count: 1100
}

const mutations = {
  setData:(state,payload)=>{
    state.count++
  }
}
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
const actions = {
  addOne:({commit},data)=>{
    return startData.getMallrankings({})
    .then(res=>{
         commit('setData')
    })

  },
  increment:  commit  => {
    commit('setData')
  },
  decrement: commit  => {
     commit('decrement')
  },
}


export default {
      namespaced: true,
      state,
      getters,
      actions,
      mutations
    }
