<script setup>
import { inject, onMounted } from 'vue'
import { chooseDrone } from '../utils'
import { useLogging } from '../hooks/useLogging'

const { bpla_block } = defineProps(['bpla_block'])
const { activity } = useLogging(bpla_block)

const translate = inject('translate')
const media = inject('media')

onMounted(() => {
  chooseDrone()
})
</script>

<template>
  <section class="main__desk desk">
    <div class="desk__container">
      <div class="desk__wrapper">
        <div
          class="desk-head desk__part"
          style="width: 100%"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
        >
          <span class="desk-head__part">{{ translate('Часть 1') }}</span>
          <h2>{{ translate('Выбор БПЛА') }}</h2>
          <p class="desk-head__paragraph">
            {{
              translate(
                'Выберите подходящий беспилотник, основываясь на параметрах задания'
              )
            }}
          </p>
        </div>
        <div
          class="workflow"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div class="drone-card desk__part">
            <div class="drone-card__header">
              <h2 class="drone-card__title">{{ translate('Амур 51') }}</h2>

              <button
                class="drone-card__button button-purple"
                data-btn_id_activity="choose-drone-1"
                data-correct
                @click="activity($event)"
              >
                {{ translate('Выбрать') }}
              </button>
            </div>
            <div class="drone-card__preview">
              <img :src="media('src/assets/img/drones/img1.png')" alt="" />
            </div>
            <div class="drone-card__descr">
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Максимальное время полёта') }}
                </h3>
                <p class="drone-card__descr-value">4,5 ч</p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Диапазон эксплуатационных температур') }}
                </h3>
                <p class="drone-card__descr-value">-30ºC … +50ºC</p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Устойчивость к ветру') }}
                </h3>
                <p class="drone-card__descr-value">
                  {{ translate('до 18 м/с') }}
                </p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Степень влагозащиты') }}
                </h3>
                <p class="drone-card__descr-value">
                  {{ translate('IP56, повышенная') }}
                </p>
              </div>
            </div>
          </div>

          <div class="drone-card desk__part">
            <div class="drone-card__header">
              <h2 class="drone-card__title">{{ translate('Енисей 22') }}</h2>

              <button
                class="drone-card__button button-purple"
                data-btn_id_activity="choose-drone-2"
                data-wrong
                @click="activity($event)"
              >
                {{ translate('Выбрать') }}
              </button>
            </div>
            <div class="drone-card__preview">
              <img :src="media('src/assets/img/drones/img2.svg')" alt="" />
            </div>
            <div class="drone-card__descr">
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Максимальное время полёта') }}
                </h3>
                <p class="drone-card__descr-value">{{ translate('1,5 ч') }}</p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Диапазон эксплуатационных температур') }}
                </h3>
                <p class="drone-card__descr-value">-30ºC … +50ºC</p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Устойчивость к ветру') }}
                </h3>
                <p class="drone-card__descr-value">
                  {{ translate('до 16 м/с') }}
                </p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Степень влагозащиты') }}
                </h3>
                <p class="drone-card__descr-value">
                  {{ translate('IP56, повышенная') }}
                </p>
              </div>
            </div>
          </div>

          <div class="drone-card desk__part">
            <div class="drone-card__header">
              <h2 class="drone-card__title">{{ translate('Чуна 360') }}</h2>

              <button
                class="drone-card__button button-purple"
                data-btn_id_activity="choose-drone-3"
                data-wrong
                @click="activity($event)"
              >
                {{ translate('Выбрать') }}
              </button>
            </div>
            <div class="drone-card__preview">
              <img :src="media('src/assets/img/drones/img3.svg')" alt="" />
            </div>
            <div class="drone-card__descr">
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Максимальное время полёта') }}
                </h3>
                <p class="drone-card__descr-value">4,5 ч</p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Диапазон эксплуатационных температур') }}
                </h3>
                <p class="drone-card__descr-value">-20ºC … +40ºC</p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Устойчивость к ветру') }}
                </h3>
                <p class="drone-card__descr-value">
                  {{ translate('до 12 м/с') }}
                </p>
              </div>
              <div class="drone-card__descr-part">
                <h3 class="drone-card__descr-title">
                  {{ translate('Степень влагозащиты') }}
                </h3>
                <p class="drone-card__descr-value">
                  {{ translate('IP54, стандартная') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="desk-descr desk__part"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
        >
          <div class="desk-descr__wrapper">
            <div class="desk-descr__part">
              <span class="desk-descr__title">{{
                translate('Длительность задания:')
              }}</span>
              <span class="desk-descr__value">{{ translate('3,5 ч') }}</span>
            </div>
            <div class="desk-descr__part">
              <span class="desk-descr__title">{{
                translate('Температура:')
              }}</span>
              <span class="desk-descr__value">+7ºC</span>
            </div>
            <div class="desk-descr__part">
              <span class="desk-descr__title">{{
                translate('Скорость ветра:')
              }}</span>
              <span class="desk-descr__value">{{
                translate('с порывами до 17 м/с')
              }}</span>
            </div>
            <div class="desk-descr__part">
              <span class="desk-descr__title">{{ translate('Погода:') }}</span>
              <span class="desk-descr__value">{{
                translate('облачно, возможен дождь')
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
