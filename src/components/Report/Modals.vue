<script setup>
import { defineProps, inject } from 'vue'

import { useLogging } from '../../hooks/useLogging'

const emit = defineEmits(['next'])
const { bpla_block } = defineProps(['bpla_block'])
const { end } = useLogging(bpla_block)

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

  <div class="popup-complete">
    <div class="popup-complete__banner reportModal_style-1">
      <div class="popup-complete__article">
        <h2 class="popup-complete__title">
          {{ translate('Задание выполнено!') }}
        </h2>
        <p>
          {{
            translate(`
            Подробно изучив все материалы, которые вы предоставили, специалисты из
            комитета по охране окружающей среды сделали позитивный вывод. За
            прошедшие 5 лет популяция нерп в данной заповедной зоне выросла на
            23%!
          `)
          }}
        </p>
        <p class="reportModal_style-2">
          {{
            translate(`
            Но браконьеры не дремлют, и за ними очень удобно наблюдать с воздуха.
            А значит ваши услуги ещё пригодятся для охраны местной флоры и фауны.
          `)
          }}
        </p>

        <a
          href=""
          class="popup-complete__button button button_active"
          data-btn_end_id="btn-end-1"
          @click=";[end($event), emit('next')]"
        >
          {{ translate('Перейти к финалу') }}
        </a>
      </div>
      <div class="popup-complete__preview reportModal_style-3">
        <img :src="media('src/assets/img/nerps.png')" alt="" />
      </div>
    </div>
  </div>
</template>
