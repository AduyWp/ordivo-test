<template>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="flat">
        <q-toolbar>
          <q-toolbar-title @click="goToHomepage()">
            Starship
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page>
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
</template>
<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'LayoutDefault',
  
    setup () {
      const router = useRouter()

      const goToHomepage = () => {
        router.push({
          path: '/'
        })
      }
      return {
        leftDrawerOpen: ref(false),
        goToHomepage
      }
    }
  }
</script>
  