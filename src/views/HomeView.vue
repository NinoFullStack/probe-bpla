<script setup>
import { inject } from 'vue'
import { useLogging } from '../hooks/useLogging.js'

const emit = defineEmits(['next'])
const { bpla_block } = defineProps(['bpla_block'])
const { start } = useLogging(bpla_block)

const translate = inject('translate')
const media = inject('media')
</script>

<template>
  <section class="main__welcome welcome">
    <div class="welcome__container">
      <div class="welcome__wrapper">
        <div
          class="welcome__image"
          data-aos="rm-opacity"
          data-aos-offset="20"
          data-aos-duration="800"
        >
          <img :src="media('src/assets/img/welcome/img.png')" alt="" />
        </div>

        <div
          class="welcome-message"
          data-aos="fade-right"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <h1>{{ translate('Поехали на задание!') }}</h1>
          <p>
            {{
              translate(
                'Оператор БПЛА работает буквально по всей России, разъезжая на машине по самым интересным локациям страны.'
              )
            }}
          </p>
          <p>
            {{
              translate(
                `Сегодня вы отправитесь на Байкал, одно из самых удивительных мест
                нашей родины. Нужно произвести авиаучёт байкальской нерпы — символа
                его уникальной экосистемы.`
              )
            }}
          </p>
          <p>
            {{
              translate(
                'Перед любым заданием с БПЛА вам необходимо получить разрешение на полёт. Получили? Тогда вперёд!'
              )
            }}
          </p>
        </div>

        <div
          class="button-box"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <a
            href=""
            data-btn_next_id="next-btn-1"
            class="button welcome-button"
            @click=";[start($event), emit('next')]"
          >
            {{ translate('Да, разрешение у меня') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
