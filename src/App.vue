<script setup>
import AOS from 'aos'
import { markRaw, onMounted, ref } from 'vue'

import {
  AssemblyModals,
  ChoosDroneModals,
  DataParsingModals,
  ReportModals,
  RoutingModals,
} from './components'

import {
  HomeView,
  ChoosDroneView,
  AssemblyView,
  RoutingView,
  DataParsingView,
  ReportView,
} from './views'

import { useLogging } from './hooks/useLogging'

const counter = ref(0)
const views = ref([
  markRaw(HomeView),
  markRaw(ChoosDroneView),
  markRaw(AssemblyView),
  markRaw(RoutingView),
  markRaw(DataParsingView),
  markRaw(ReportView),
])

const end = localStorage.getItem('end')
const bpla_block = +localStorage.getItem('bpla_block')

if (bpla_block) {
  counter.value = bpla_block
}

const { cancel, restored } = useLogging(counter.value)

const nextBlock = () => {
  if (counter.value !== views.value.length - 1) {
    counter.value++
  }
}

onMounted(() => {
  AOS.init()
  window.addEventListener('beforeunload', cancel)

  if (bpla_block && !end) {
    restored()
  }
})
</script>

<template>
  <div class="wrapper">
    <main class="main">
      <component :is="views[counter]" :bpla_block="counter" @next="nextBlock" />

      <ChoosDroneModals v-if="counter === 1" bpla_block="1" @next="nextBlock" />
      <AssemblyModals v-if="counter === 2" bpla_block="2" @next="nextBlock" />
      <RoutingModals v-if="counter === 3" bpla_block="3" @next="nextBlock" />
      <DataParsingModals
        v-if="counter === 4"
        bpla_block="4"
        @next="nextBlock"
      />
      <ReportModals v-if="counter === 5" bpla_block="5" @next="nextBlock" />
    </main>
  </div>
</template>
