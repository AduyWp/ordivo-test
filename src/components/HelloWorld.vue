<template>
  <q-input label="Search" class="q-pa-md" outlined v-model="search">
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>

  <q-infinite-scroll
    class="q-pa-md"
    @load="onLoadRef"
    :offset="250"
    :scroll-target="scrollTargetRef"
  >
    <div class="row q-gutter-y-xs">
      <div class="col-6 col-md-3 relative-position q-px-sm q-py-sm bg-white text-black card-list text-center"
        v-for="(starship, index) in useStarship.starhipsList"
        :key="index"
      >
        <q-card class="my-card">
          <q-card-section>
            <q-list>
              <q-item class="q-pa-none q-mb-sm">
                <q-item-section class="items-start">
                  <p class="text-subtitle q-mb-none">Name :</p>
                  <p class="ellipsis q-mb-none">{{ starship.name }}</p>
                </q-item-section>
              </q-item>
              <q-item class="q-pa-none q-mb-sm">
                <q-item-section class="items-start">
                  <p class="text-subtitle q-mb-none">Model :</p>
                  <p class="ellipsis q-mb-none">{{ starship.model }}</p>
                </q-item-section>
              </q-item>
              <q-item class="q-pa-none q-mb-sm">
                <q-item-section class="items-start">
                  <p class="text-subtitle q-mb-none">Manufacturer :</p>
                  <p class="ellipsis q-mb-none">{{ starship.manufacturer }}</p>
                </q-item-section>
              </q-item>
              <q-item class="q-pa-none q-mb-sm">
                <q-item-section class="items-start">
                  <p class="text-subtitle q-mb-none">Cost in Credit :</p>
                  <p class="ellipsis q-mb-none">
                    <span v-if="starship.cost_in_credits !== 'unknown'">
                      {{ numberFormat.format(starship.cost_in_credits) }}
                    </span>
                    <span v-else>-</span>
                  </p>
                </q-item-section>
              </q-item>
            </q-list>
            <q-btn @click="goToDetailStarship(starship.url)" class="q-mt-md" color="primary" label="See Details" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
</template>

<script setup>
  // @ is an alias to /src
  import { useStarships } from '@/repositories/starships'
  import { ref, watch, computed } from 'vue'
  import { useRouter } from 'vue-router'

  const useStarship = useStarships()
  const router = useRouter()
  const search = ref('')

  const numberFormat = computed(() => {
    return new Intl.NumberFormat('id-ID')
  })

  const searchData = async (q) => {
    try {
      const { data } = await useStarship.searchStarships(q)
      return data
    } catch (err) {
      console.log(err)
    }
  }

  // infinite scroll
  const scrollTargetRef = ref(null)
  const onLoadRef = async (index, done) => {
    try {
      if (index > 0) {
        await new Promise((resolve) => {
          setTimeout(resolve, 2000)
        })
        const { data } = await useStarship.fetchStarships(index)
        if (data.next === null) {
          done(true)
        }
        useStarship.starhipsList = [
          ...useStarship.starhipsList,
          ...data.results
        ]
        done()
      } else {
        await new Promise((resolve) => {
          setTimeout(resolve, 200)
        })
        done()
      }
    } catch (err) {
      done()
    }
  }

  const goToDetailStarship = (url) => {
    const idStarship = url.split("/");
    let id = idStarship[5];
    router.push({
      path: '/starship/' + id
    })
  }

  watch(search, async (val) => {
    if(val.length >= 3){
      const data = await searchData(val)
      useStarship.starhipsList = data.results
    } 
    if(!val.length) {
      const data = await useStarship.fetchStarships(1)
      console.log(data)
      useStarship.starhipsList = data.data.results
    }
  })
</script>
