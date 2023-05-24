<template>
    <q-card class="my-card">
      <q-card-section>
        <div class="row q-gutter-y-xs">
            <div class="col-12 col-md-5 relative-position q-px-sm q-py-sm bg-white text-black card-list text-center">
                <q-img src="https://fakeimg.pl/600x400"></q-img>
            </div>
            <div class="col-12 col-md-7 relative-position q-px-sm q-py-sm bg-white text-black card-list text-center">
                <q-list>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Name</span>
                                <span class="ellipsis">{{ detailStarships.name }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Model</span>
                                <span class="ellipsis">{{ detailStarships.model }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Manufacturer</span>
                                <span class="ellipsis">{{ detailStarships.manufacturer }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Cost in Credit</span>
                                <span class="ellipsis">{{ numberFormat.format(detailStarships.cost_in_credits) }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Length</span>
                                <span class="ellipsis">{{ detailStarships.length }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Max Atmosphering Speed</span>
                                <span class="ellipsis">{{ detailStarships.max_atmosphering_speed }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Crew</span>
                                <span class="ellipsis">{{ detailStarships.crew }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Passenger</span>
                                <span class="ellipsis">{{ detailStarships.passengers }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Cargo Capacity</span>
                                <span class="ellipsis">{{ numberFormat.format(detailStarships.cargo_capacity) }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Consumable</span>
                                <span class="ellipsis">{{ detailStarships.consumables }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Rating</span>
                                <span class="ellipsis">{{ detailStarships.hyperdrive_rating }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">MGLT</span>
                                <span class="ellipsis">{{ detailStarships.MGLT }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Starship Class</span>
                                <span class="ellipsis">{{ detailStarships.starship_class }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Pilots</span>
                                <div>
                                    <p v-for="(pilots, index) in detailStarships.pilots" :key="index" class="ellipsis">
                                        {{ pilots }}
                                    </p>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Films</span>
                                <div>
                                    <p v-for="(films, index) in detailStarships.films" :key="index" class="ellipsis">
                                        {{ films }}
                                    </p>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Created</span>
                                <span class="ellipsis">{{ detailStarships.created }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Edited</span>
                                <span class="ellipsis">{{ detailStarships.edited }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none q-mb-sm">
                        <q-item-section class="items-start">
                            <div class="row">
                                <span class="text-subtitle q-mr-md text-weight-bold">Url</span>
                                <span class="ellipsis">{{ detailStarships.url }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
      </q-card-section>
    </q-card>
</template>
  
<script setup>
    import { onMounted, ref, computed } from 'vue'
    import { useStarships } from '@/repositories/starships'
    import { useQuasar } from 'quasar'
    import { useRoute } from 'vue-router'

    const $q = useQuasar()
    const route = useRoute()
    const useStarship = useStarships()
    const detailStarships = ref({})

    const numberFormat = computed(() => {
        return new Intl.NumberFormat('id-ID')
    })

    // Fetch Profile
    const fetchData = async () => {
        try {
            $q.loading.show({
                message: 'Mengambil data. Silahkan tunggu...',
                boxClass: 'bg-grey-2 text-grey-9',
                spinnerColor: 'primary'
            })
            const { data } = await useStarship.fetchDetailStarships(route.params.id)
            $q.loading.hide()
            detailStarships.value = data
        } catch (err) {
            $q.loading.hide()
            console.log(err)
        }
    }

    // onMounted
    onMounted(() => {
        fetchData()
    })

</script>