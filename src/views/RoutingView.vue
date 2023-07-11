<script setup>
import { inject, onMounted } from 'vue'
import { routing } from '../utils'
import { useLogging } from '../hooks/useLogging'

const { bpla_block } = defineProps(['bpla_block'])
const { activity } = useLogging(bpla_block)

const translate = inject('translate')
const media = inject('media')

onMounted(() => {
  routing()
})
</script>

<template>
  <section class="main__route route">
    <div class="route__container">
      <div class="route__wrapper workflow desc routing_style-1">
        <div
          class="desk__part desk-head"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span class="desk-head__part">{{ translate('Часть 3') }}</span>
          <h2>{{ translate('Составление полётного маршрута') }}</h2>

          <div class="route-steps">
            <div class="route-steps__part route-steps__part_active">
              <div class="route-steps__header">
                <div class="route-steps__title">
                  {{ translate('1. Облёт водной поверхности') }}
                </div>
                <div class="route-steps__f-icon">
                  <img
                    :src="media('src/assets/img/icons/success.svg')"
                    alt=""
                  />
                </div>
              </div>
              <p class="route-steps__paragraph">
                {{
                  translate(
                    'Соедините точки маршрута от старта до финиша так, чтобы пролететь зигзагом между берегами'
                  )
                }}
              </p>
            </div>

            <div class="route-steps__part">
              <div class="route-steps__header">
                <div class="route-steps__title">
                  {{ translate('2. Облёт береговой линии') }}
                </div>
                <div class="route-steps__f-icon">
                  <img
                    :src="media('src/assets/img/icons/success.svg')"
                    alt=""
                  />
                </div>
              </div>
              <p class="route-steps__paragraph">
                {{
                  translate(
                    'Проложите маршрут так, чтобы пролететь вдоль одного и другого берега по очереди'
                  )
                }}
              </p>
            </div>

            <div class="route-steps__part security-center">
              <div class="route-steps__header">
                <div class="route-steps__title">
                  {{ translate('3. Настройка высоты полёта') }}
                </div>
                <div class="route-steps__f-icon">
                  <img
                    :src="media('src/assets/img/icons/success.svg')"
                    alt=""
                  />
                </div>
              </div>
              <p class="route-steps__paragraph">
                {{
                  translate(
                    'Выберите безопасную высоту полёта по установленному маршруту'
                  )
                }}
              </p>

              <div class="security-center__answears" data-correct="1">
                <button
                  class="security-center__answears-button"
                  data-btn_id_activity="routing-btn-9"
                  @click="activity($event)"
                >
                  <span class="security-center__answears-marker"></span>
                  <span>{{ translate('10-30 метров') }}</span>
                </button>
                <button
                  class="security-center__answears-button"
                  data-btn_id_activity="routing-btn-10"
                  @click="activity($event)"
                >
                  <span class="security-center__answears-marker"></span>
                  <span>{{ translate('200-300 метров') }}</span>
                </button>
                <button
                  class="security-center__answears-button"
                  data-btn_id_activity="routing-btn-11"
                  @click="activity($event)"
                >
                  <span class="security-center__answears-marker"></span>
                  <span>{{ translate('750-1000 метров') }}</span>
                </button>

                <button
                  class="routing_style-2 security-center__answear-complete security-center__answear-complete_disabled"
                >
                  {{ translate('Подтвердить') }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="desk__part route-map routing_style-3"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <img
            class="route-map__bg"
            :src="media('src/assets/img/route/bg.svg')"
            alt=""
          />
          <img
            class="route-map__bg routing_style-4"
            :src="media('src/assets/img/route/static-bg.png')"
            alt=""
          />

          <div class="route-map__city routing_style-5">
            <img :src="media('src/assets/img/route/city1.png')" alt="" />
          </div>
          <div class="route-map__city routing_style-6">
            <img :src="media('src/assets/img/route/city2.png')" alt="" />
          </div>

          <div class="route-map__city routing_style-7">
            <img :src="media('src/assets/img/route/lake.png')" alt="" />
          </div>

          <div class="route-map__label routing_style-8">
            <img
              :src="media('src/assets/img/route/start-label.png')"
              alt=""
            /><img
              :src="media('src/assets/img/route/finish-label2.png')"
              alt=""
            />
          </div>
          <div class="route-map__label routing_style-9">
            <img
              :src="media('src/assets/img/route/finish-label.png')"
              alt=""
            /><img
              :src="media('src/assets/img/route/start-label2.png')"
              alt=""
            />
          </div>

          <div
            class="route-map__point route-map__point_active routing_style-10"
            data-btn_id_activity="routing-btn-1"
            @click="activity($event)"
          >
            1
          </div>
          <div
            class="route-map__point routing_style-11"
            data-btn_id_activity="routing-btn-2"
            @click="activity($event)"
          >
            2
          </div>
          <div
            class="route-map__point routing_style-12"
            data-btn_id_activity="routing-btn-3"
            @click="activity($event)"
          >
            3
          </div>
          <div
            class="route-map__point routing_style-13"
            data-btn_id_activity="routing-btn-4"
            @click="activity($event)"
          >
            4
          </div>
          <div
            class="route-map__point routing_style-14"
            data-btn_id_activity="routing-btn-5"
            @click="activity($event)"
          >
            5
          </div>
          <div
            class="route-map__point routing_style-15"
            data-btn_id_activity="routing-btn-6"
            @click="activity($event)"
          >
            6
          </div>
          <div
            class="route-map__point routing_style-16"
            data-btn_id_activity="routing-btn-7"
            @click="activity($event)"
          >
            7
          </div>
          <div
            class="route-map__point routing_style-17"
            data-btn_id_activity="routing-btn-8"
            @click="activity($event)"
          >
            8
          </div>

          <div class="route-map__line route-map__line1 routing_style-18"></div>
          <div class="route-map__line route-map__line2 routing_style-19"></div>
          <div class="route-map__line route-map__line3 routing_style-20"></div>
          <div class="route-map__line route-map__line4 routing_style-21"></div>
          <div class="route-map__line route-map__line5 routing_style-22"></div>
          <div class="route-map__line route-map__line6 routing_style-23"></div>
          <div class="route-map__line route-map__line7 routing_style-24"></div>

          <div
            class="route-map__line-zigzag route-map__line-zigzag1 routing_style-25"
          ></div>
          <div
            class="route-map__line-zigzag route-map__line-zigzag2 routing_style-26"
          ></div>
          <div
            class="route-map__line-zigzag route-map__line-zigzag3 routing_style-27"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
