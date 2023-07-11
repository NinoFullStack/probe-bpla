<script setup>
import { inject, onMounted } from 'vue'
import { report } from '../utils'
import { useLogging } from '../hooks/useLogging'

const { bpla_block } = defineProps(['bpla_block'])
const { activity } = useLogging(bpla_block)

const translate = inject('translate')
const media = inject('media')

onMounted(() => {
  report()
})
</script>

<template>
  <div class="main__container desk finish-workflow">
    <div
      class="rounded-all desk__part report_style-1"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <p class="part-name">{{ translate('Часть 5') }}</p>
      <h1 class="title">{{ translate('Отчёт') }}</h1>
    </div>
    <div
      class="content-part security-center"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
    >
      <div class="content-part__wrapper desk__part">
        <p class="content-part__paragraph">
          {{ translate('Выберите, какие данные нужно добавить в отчёт:') }}
        </p>
        <div class="security-center__answears">
          <button
            class="security-center__answears-button"
            data-correct
            data-btn_id_activity="report-btn-1"
            @click="activity($event)"
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate('Время полёта БПЛА')
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-2"
            @click="activity($event)"
            data-correct
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate('Средняя скорость полёта')
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-3"
            @click="activity($event)"
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate('Время на подготовку БПЛА к полёту')
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-4"
            @click="activity($event)"
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate(
                'Количество потребленной электроэнергии во время полёта'
              )
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-5"
            @click="activity($event)"
            data-correct
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate('Фото- и видеоматериалы')
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-6"
            @click="activity($event)"
            data-correct
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate('Пройденное расстояние')
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-7"
            @click="activity($event)"
            data-correct
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate(
                'Описание использованных технических средств и оборудования'
              )
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-8"
            @click="activity($event)"
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate(
                'Марка автомобиля, на котором оператор приехал на задание'
              )
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-9"
            @click="activity($event)"
            data-correct
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate('Оценка популяции нерп')
            }}</span>
          </button>
          <button
            class="security-center__answears-button"
            data-btn_id_activity="report-btn-10"
            @click="activity($event)"
          >
            <span
              class="security-center__answears-marker"
              :style="{
                backgroundImage: `url(${media(
                  'src/assets/img/icons/red-bird.svg'
                )})`,
              }"
            ></span>
            <span class="security-center__answears-text">{{
              translate('Название ближайшего населенного пункта')
            }}</span>
          </button>

          <div class="security-center__btn-wrapper">
            <button
              data-btn_id_activity="report-btn-11"
              class="report_style-2 security-center__answear-complete purple-button security-center__answear-complete_disabled"
              @click="activity($event)"
            >
              {{ translate('Проверить') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="questionnaire"
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-delay="300"
      :style="{
        backgroundImage: `url(${media(
          'src/assets/img/stage5/paper-decor.png'
        )})`,
      }"
    >
      <div class="questionnaire__paper">
        <h1 class="questionnaire__title report_style-3">Отчёт</h1>
        <div class="questionnaire__logo report_style-4">
          <img
            :src="media('src/assets/img/logo-paper.svg')"
            alt=""
            class="img-fluid"
          />
        </div>

        <p class="questionnaire__paragraph">
          {{ translate('об исследовании популяции нерп') }}
        </p>
        <div class="answears">
          <h4 class="answears__title">{{ translate('Содержание:') }}</h4>

          <div class="answear answear_empty">
            <div class="answear__num">1.</div>
            <div class="answear__text"><div class="decor"></div></div>
          </div>

          <div class="answear answear_empty">
            <div class="answear__num">2.</div>
            <div class="answear__text"><div class="decor"></div></div>
          </div>

          <div class="answear answear_empty">
            <div class="answear__num">3.</div>
            <div class="answear__text"><div class="decor"></div></div>
          </div>

          <div class="answear answear_empty">
            <div class="answear__num">4.</div>
            <div class="answear__text"><div class="decor"></div></div>
          </div>
          <div class="answear answear_empty">
            <div class="answear__num">5.</div>
            <div class="answear__text"><div class="decor"></div></div>
          </div>
        </div>

        <div class="answears">
          <h4 class="answears__title">
            {{ translate('Дополнительные материалы:') }}
          </h4>

          <div class="answear answear_empty">
            <div class="answear__text"><div class="decor"></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
