import VUE from 'vue'
import IndexPage from './components/index-page.vue'
let view = new VUE({
  el:'#app',
  template:'<IndexPage></IndexPage>',
  components:{IndexPage}
})
