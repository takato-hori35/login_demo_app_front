// Vuex を扱うファイル
// アプリ全体で共有される
// 記述方法は決まっているため、以下以外の書き方はできない

const homePath = 'projects'

export const state = () => ({
  // 追加
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    homePath: {
      name: homePath
    }
  },
  projects: {
    current: null,
    list: [
      { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, name: 'MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
      { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
  }
})

// 算出プロパティ
export const getters = {}

// stateの値を変更する
export const mutations = {
  setCurrentProject (state, payload) {
    state.projects.current = payload
  }
}

// アプリ全体のメソッド
export const actions = {
  logout ({ commit }) {
    commit('setLoggedIn', false)
  },
  // { state, getters, commit, dispatch, routeState, routeGeters }
  // routeState => ルート(store/index.js)のstateを取得(routeState = state)
  getCurrentProject ({ state, commit }, params) {
    const id = Number(params.id)
    const currentProject = state.projects.list.find(project => project.id === id) || null
    commit('setCurrentProject', currentProject)
  }
}
