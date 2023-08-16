<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="appBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <app-logo
    @click.native="$vuetify.goTo('#scroll-top')"
    />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>

    <v-spacer />
    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        @click="$vuetify.goTo(`#${menu.title}`)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
    {{ isScrollPoint }}
  </v-app-bar>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  data ({ $config: { appName }, $store }) {
    return {
      appName,
      scrollY: 0,
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  },

  computed: {
    isScrollPoint () {
      // スクロール幅が見えている画像の幅を超えた場合にtrueが返却される
      return this.scrollY > (this.imgHeight - this.homeAppBarHeight)
    },
    toolbarStyle () {
      const color = this.isScrollPoint ? 'white' : 'transparent'
      const elevation = this.isScrollPoint ? 4 : 0
      return { color, elevation }
    }
  },

  // Vueインスタンスがマウントされた後に実行される
  // Vueインスタンス: Vue.new()
  // マウント:  Vueの実行準備が完全に整った後
  mounted () {
    // addEventListener: 第一引数のイベントが発生した後に第二引数の関数を実行
    window.addEventListener('scroll', this.onScroll)
  },
  // ページ遷移などでデータや命令が削除される直前に実行
  beforeDestroy () {
    // scrollイベントは常に実行されるため、イベントを削除してメモリ消費を抑える。
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.scrollY = window.scrollY
    }
  }
}
</script>
