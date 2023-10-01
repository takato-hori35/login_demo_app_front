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
    <app-title class="hidden-mobile-and-down" />

    <v-spacer />
    <v-toolbar-items class="ml-2 hidden-ipad-and-down">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        :class="{ 'hidden-sm-and-down': (menu.title == 'about') }"
        @click="$vuetify.goTo(`#${menu.title}`)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>

    <app-signup-button />
    <app-login-button />

    <v-menu
      bottom
      nudge-left="110"
      nudge-width="100"
    >
      <template #activator="{ on }">
        <v-app-bar-nav-icon
          class="hidden-ipad-and-up"
          v-on="on"
        />
      </template>
      <v-list
        dense
        class="hidden-ipad-and-up"
      >
        <v-list-item
          v-for="(menu, i) in menus"
          :key="`menu-list-${i}`"
          exact
          @click="$vuetify.goTo(`#${menu.title}`)"
        >
          <v-list-item-title>
            {{ $t(`menus.${menu.title}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import AppSignupButton from '../App/AppSignupButton.vue'
import AppTitle from '../App/AppTitle.vue'
export default {
  components: { AppSignupButton, AppTitle },
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
  data ({ $store }) {
    return {
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
