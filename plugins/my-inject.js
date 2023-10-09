class MyInject {
  // Nuxtのcontextを使用するには、constructorの中で初期化する
  // constructor => クラスをnewしたときに最初に実行される関数
  constructor (ctx) {
    this.app = ctx.app
  }

  pageTitle (routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }
}

// inject => オリジナルクラスを追加できる
// nuxt.jsどこから呼び出せる
// export default (context, inject)
export default ({ app }, inject) => {
  // inject('呼び出し名', クラスのインスタンス(context))
  // 'my'の場合は $my で呼び出す
  inject('my', new MyInject({ app }))
}
