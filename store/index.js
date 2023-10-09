// Vuex を扱うファイル
// アプリ全体で共有される
// 記述方法は決まっているため、以下以外の書き方はできない

const redirectPath = 'projects'

export const state = () => ({
  // 追加
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    redirectPath: {
      name: redirectPath
    }
  }
})

// 算出プロパティ
export const getters = {}

// stateの値を変更する
export const mutation = {}

// アプリ全体のメソッド
export const actions = {}
