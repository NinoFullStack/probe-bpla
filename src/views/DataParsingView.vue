<script setup>
import { inject, onMounted } from 'vue'
import { dataParcing } from '../utils'
import { useLogging } from '../hooks/useLogging'

const { bpla_block } = defineProps(['bpla_block'])
const { activity } = useLogging(bpla_block)

const translate = inject('translate')
const media = inject('media')

onMounted(() => {
  dataParcing()
})
</script>

<template>
  <section class="main__search-nerp search-nerp">
    <div class="search-nerp__container">
      <div
        class="search-nerp__wrapper workflow desk"
        style="display: flex; margin: 16px 0"
      >
        <div class="search-nerp__aside">
          <div
            class="desk__part desk-head"
            style="width: 400px"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <span class="desk-head__part">{{ translate('Часть 4') }}</span>
            <h2>{{ translate('Разбор данных') }}</h2>

            <p class="desk-head__paragraph">
              {{
                translate(
                  `Нейросеть выделила на фото объекты, которые приняла за байкальскую
                  нерпу. Проверьте результат искусственного интеллекта и исправьте
                  отметки, если необходимо.`
                )
              }}
            </p>
          </div>

          <div
            class="search-nerp__steps desk__part"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3 class="search-nerp__title">{{ translate('Найдено нерп') }}</h3>

            <div class="steps-nav">
              <div class="steps-nav__row">
                <div
                  class="steps-nav__el steps-nav__el_finished"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  1
                </div>
                <span></span>
                <div
                  class="steps-nav__el steps-nav__el_finished"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  2
                </div>
                <span></span>
                <div
                  class="steps-nav__el steps-nav__el_finished"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  3
                </div>
                <span></span>
                <div
                  class="steps-nav__el steps-nav__el_finished"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  4
                </div>
                <span></span>
                <div
                  class="steps-nav__el steps-nav__el_finished"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  5
                </div>
                <span></span>
                <div
                  class="steps-nav__el steps-nav__el_finished"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  6
                </div>
                <span></span>
                <div
                  class="steps-nav__el steps-nav__el_active"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  7
                </div>
              </div>

              <div class="steps-nav__row">
                <div
                  class="steps-nav__el steps-nav__el_active"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  8
                </div>
                <span></span>
                <div
                  class="steps-nav__el steps-nav__el_active"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  9
                </div>
                <span></span>
                <div
                  class="steps-nav__el steps-nav__el_active"
                  :style="{
                    backgroundImage: `url(${media(
                      'src/assets/img/icons/success.svg'
                    )})`,
                  }"
                >
                  10
                </div>
              </div>
            </div>
          </div>

          <div
            class="search-nerp__visor desk__part"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h3 class="search-nerp__title">
              {{ translate('Режим тепловизора') }}
            </h3>

            <button
              class="visor-switch"
              data-btn_id_activity="data-parcing-btn-5"
              @click="activity($event)"
            >
              <span class="visor-switch__handle"></span>
            </button>
          </div>
        </div>

        <div
          class="desk__part nerp-map"
          style="border-radius: 12px; padding: 0; overflow: hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div class="nerp-map__map">
            <img
              :src="media('src/assets/img/stage4/clear-map.svg')"
              alt=""
              style="width: 100%"
            />
          </div>
          <div class="nerp-map__visor">
            <img
              :src="media('src/assets/img/stage4/detect-map.svg')"
              alt=""
              style="width: 100%"
            />
          </div>

          <img
            :src="media('src/assets/img/stage4/checked-nerps.svg')"
            alt=""
            style="position: absolute; width: 70.59%; left: 8.7%; top: 15.18%"
          />

          <div
            class="nerp-map__box"
            data-btn_id_activity="data-parcing-btn-1"
            style="bottom: 23.96%; left: 0"
            @click="activity($event)"
          ></div>
          <div
            class="nerp-map__box"
            data-btn_id_activity="data-parcing-btn-2"
            style="bottom: 30.03%; right: 2.33%"
            @click="activity($event)"
          ></div>
          <div
            class="nerp-map__box"
            data-btn_id_activity="data-parcing-btn-3"
            style="top: 6.23%; left: 32.35%"
            @click="activity($event)"
          ></div>
          <div
            class="nerp-map__box"
            data-btn_id_activity="data-parcing-btn-4"
            style="bottom: 29.07%; left: 20.59%"
            @click="activity($event)"
          ></div>

          <div
            class="nerp-map__incorrect-box"
            style="top: 10.14%; left: 22.67%"
          ></div>
          <div
            class="nerp-map__incorrect-box"
            style="bottom: 11.98%; left: 20.59%"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
