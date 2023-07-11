<script setup>
import { defineProps, inject } from 'vue'

import { useLogging } from '../../hooks/useLogging'

const emit = defineEmits(['next'])
const { bpla_block } = defineProps(['bpla_block'])
const { nextBlock } = useLogging(bpla_block)

const translate = inject('translate')
const media = inject('media')
</script>

<template>
  <div class="popup">
    <div class="popup__icon">
      <img :src="media('src/assets/img/icons/attention.svg')" alt="" />
    </div>
    <div class="popup__info">
      <div class="popup__header">
        <h3 class="popup__title">
          {{ translate('Ой, это неверный вариант!') }}
        </h3>
        <button class="popup__close-btn">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
              fill="#75797B"
            />
          </svg>
        </button>
      </div>
      <p class="popup__paragraph">
        {{
          translate(
            'Если не знаете, какой вариант выбрать, загляните в справочник.'
          )
        }}
      </p>
    </div>
  </div>

  <div class="popup-loading">
    <div
      class="popup-loading__card"
      :style="{
        backgroundImage: `url(${media('src/assets/img/loading-bg.png')})`,
      }"
    >
      <h2 class="popup-loading__title title">
        {{ translate('БПЛА летит по маршруту...') }}
      </h2>

      <div class="popup-loading__progress">
        <div class="popup-loading__progress-line"></div>
      </div>
    </div>
  </div>

  <div class="popup-complete">
    <div class="popup-complete__banner">
      <div class="popup-complete__article">
        <h2 class="popup-complete__title">
          {{ translate('БПЛА вернулся с задания!') }}
        </h2>
        <p class="routerModal_style-1">
          {{
            translate(`
            Робот благополучно облетел Байкал по построенному вами маршруту. Он
            сделал фото и видео, которые нужны заказчику для оценки популяции
            нерп. Давайте разберем данные и подготовим их для передачи заказчику!
          `)
          }}
        </p>

        <button
          data-btn_next_id="next-btn-4"
          class="popup-complete__button button button_active"
          @click=";[nextBlock($event), emit('next')]"
        >
          {{ translate('Разобрать данные') }}
        </button>
      </div>
      <div class="popup-complete__preview">
        <img :src="media('src/assets/img/fripick.png')" alt="" />
      </div>
    </div>
  </div>
</template>
