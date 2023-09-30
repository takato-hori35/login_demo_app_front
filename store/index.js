// Vuex を扱うファイル
// アプリ全体で共有される
// 記述方法は決まっているため、以下以外の書き方はできない

export const state = () => ({
  loggedIn: false,
  // 追加
  styles: {
    homeAppBarHeight: 56
  }
})

// 算出プロパティ
export const getters = {}

// stateの値を変更する
export const mutation = {}

// アプリ全体のメソッド
export const actions = {}
