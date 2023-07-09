<script setup>
import { onMounted, inject } from 'vue'

import { useLogging } from '../hooks/useLogging'
import { assembly } from '../utils'

const { bpla_block } = defineProps(['bpla_block'])
const { activity } = useLogging(bpla_block)

const translate = inject('translate')
const media = inject('media')

onMounted(() => {
  assembly()
})
</script>

<template>
  <section class="main__setup setup">
    <div class="setup__container">
      <div class="setup__wrapper">
        <div
          class="setup-body desk-head desk__part"
          data-aos="fade-right"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <span class="desk-head__part">{{ translate('Часть 2') }}</span>
          <div class="setup-body__section setup-body__section_first">
            <h2>Сборка</h2>
            <p class="desk-head__paragraph">
              {{
                translate(
                  'Соберите беспилотник, прикрепив и проверив все критические части: крылья, камеру, аккумулятор и парашют'
                )
              }}
            </p>

            <div class="steps-nav">
              <div
                class="steps-nav__el"
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
                class="steps-nav__el"
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
                class="steps-nav__el"
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
                class="steps-nav__el"
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
                class="steps-nav__el"
                :style="{
                  backgroundImage: `url(${media(
                    'src/assets/img/icons/success.svg'
                  )})`,
                }"
              >
                5
              </div>
            </div>

            <button
              class="setup__button button-purple"
              data-btn_id_activity="assembly-6"
              disabled
              @click="activity($event)"
            >
              {{ translate('Перейти к проверке систем') }}
            </button>
          </div>
          <div
            class="setup-body__section setup-body__section_second"
            style="display: none"
          >
            <h2>{{ translate('Предполётная проверка') }}</h2>
            <p
              class="desk-head__paragraph"
              style="font-size: 16px; font-weight: 600"
            >
              {{ translate('Выберите нужную деталь или устройство') }}
            </p>

            <div class="setup-body__message">
              <div class="setup-body__message-step">1/6</div>
              <p class="setup-body__message-text">
                {{
                  translate(
                    'Этот прибор позволяет определить высоту по показателям атмосферного давления'
                  )
                }}
              </p>
            </div>
          </div>
        </div>

        <div class="setup__enviroment">
          <div
            class="bag decor-setup"
            style="
              width: 33.28%;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -36%);
            "
          >
            <img :src="media('src/assets/img/setup-details/bag.svg')" alt="" />
          </div>

          <div
            class="drone"
            style="
              width: 82%;
              position: absolute;
              z-index: 10;
              top: 21%;
              left: 12%;
            "
          >
            <svg
              viewBox="0 0 1017 303"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M320.477 223.932L329.586 147.248C329.586 147.248 181.564 180.112 1 283.534L8.84975 302.468L320.471 223.932H320.477Z"
                fill="#006A6D"
              />
              <path
                d="M1.2832 282.663L9.13296 301.597L125.95 272.16C151.009 257.945 185.352 251.135 215.976 233.989C289.219 192.978 322.6 178.705 343.554 187.846L329.875 146.39C329.875 146.39 181.853 179.254 1.28966 282.676L1.2832 282.663Z"
                fill="#009393"
              />
              <path
                d="M113.802 273.741L324.629 221.498C327.185 220.865 329.083 218.715 329.399 216.101L336.513 156.576C337.365 149.443 330.723 143.723 323.796 145.621C280.254 157.531 149.675 195.741 3.19573 279.209C1.71099 280.055 1.07836 281.875 1.73036 283.463L8.02436 298.878C8.66344 300.441 10.3483 301.293 11.9815 300.88L24.1306 297.82"
                stroke="black"
                stroke-width="1.93662"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M122.814 246.118C125.473 246.118 127.629 243.962 127.629 241.303C127.629 238.643 125.473 236.487 122.814 236.487C120.154 236.487 117.998 238.643 117.998 241.303C117.998 243.962 120.154 246.118 122.814 246.118Z"
                stroke="white"
                stroke-width="3.22769"
                stroke-miterlimit="10"
              />
              <path
                d="M694.23 146.756L660.701 77.1992C660.701 77.1992 811.37 60.1827 1015.74 99.3218L1014.47 119.779L694.237 146.762L694.23 146.756Z"
                fill="#00B7B7"
              />
              <path
                d="M1015.19 98.5859L1013.91 119.043L893.876 129.159C865.556 123.859 834.286 116.164 800.751 105.81C729.309 83.7514 694.353 97.0108 677.504 112.459L660.152 76.4633C660.152 76.4633 810.821 59.4469 1015.19 98.5859H1015.19Z"
                fill="#009393"
              />
              <path
                d="M684.684 143.115L658.378 88.6447C654.911 81.4727 658.578 75.1917 666.531 74.6752C711.099 71.8026 847.095 66.7222 1013.96 98.4375C1014.99 98.6312 1015.71 99.5608 1015.64 100.6L1014.59 117.462C1014.52 118.482 1013.72 119.301 1012.71 119.392L690.945 146.672C688.318 146.905 685.826 145.491 684.684 143.115Z"
                stroke="black"
                stroke-width="2.58216"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M885.433 106.01C888.093 106.01 890.249 103.854 890.249 101.195C890.249 98.535 888.093 96.3789 885.433 96.3789C882.773 96.3789 880.617 98.535 880.617 101.195C880.617 103.854 882.773 106.01 885.433 106.01Z"
                stroke="white"
                stroke-width="3.22769"
                stroke-miterlimit="10"
              />
              <path
                d="M320.491 222.692C321.621 225.209 323.964 226.972 326.695 227.372C409.182 239.431 468.436 228.398 514.837 218.76C561.238 209.123 619.989 195.65 690.85 151.741C693.199 150.288 694.645 147.738 694.678 144.975L695.44 75.9156C695.485 71.9456 692.399 68.6404 688.435 68.4145C674.685 67.6204 641.356 66.381 592.508 68.9954C550.949 71.2161 524.598 74.8053 510.906 77.1228C504.418 78.2202 498.234 73.9855 496.891 67.5494L492.359 45.7431C491.443 41.3406 487.137 38.5131 482.728 39.4233L477.803 40.4497L472.877 41.4761C468.475 42.3928 465.647 46.6985 466.557 51.1076L471.089 72.9139C472.425 79.3563 468.436 85.702 462.051 87.2771C448.566 90.6016 422.971 97.8059 383.961 112.318C338.108 129.373 308.032 143.781 295.735 149.991C292.191 151.779 290.674 156.04 292.301 159.661L320.498 222.705L320.491 222.692Z"
                fill="#02828B"
              />
              <path
                d="M439.869 200.343C383.056 174.941 331.458 182.984 306.107 189.872L320.245 221.478C321.374 223.995 323.718 225.758 326.448 226.158C408.935 238.217 468.189 227.184 514.591 217.547C559.023 208.315 614.778 195.566 681.643 155.949C629.58 178.821 502.784 228.476 439.869 200.349V200.343Z"
                fill="#006A6D"
              />
              <path
                d="M496.407 111.284L510.609 77.1736C504.121 78.271 497.937 74.0362 496.595 67.6002L492.063 45.7939C491.146 41.3913 486.84 38.5639 482.431 39.4741L477.506 40.5005L472.58 41.5269C468.178 42.4436 465.35 46.7493 466.261 51.1583L470.792 72.9646C472.09 79.2135 468.365 85.359 462.316 87.16L488.428 112.904C490.907 115.344 495.065 114.505 496.401 111.297L496.407 111.284Z"
                fill="#00B7B7"
              />
              <path
                d="M489.093 97.6116L479.643 52.127"
                stroke="white"
                stroke-width="0.645539"
                stroke-miterlimit="10"
              />
              <path
                d="M490.906 78.1426L485.264 50.959"
                stroke="white"
                stroke-width="3.22769"
                stroke-miterlimit="10"
              />
              <path
                d="M483.127 39.3975L470.941 41.9277L466.153 18.8703C466.076 18.4974 466.316 18.131 466.689 18.0535L477.523 15.8041C477.896 15.7267 478.262 15.9671 478.339 16.34L483.127 39.3975Z"
                fill="#333438"
              />
              <path
                d="M695.181 99.1934C695.181 99.1934 502.256 162.889 300.234 177.394"
                stroke="#00B7B7"
                stroke-width="1.29108"
                stroke-miterlimit="10"
              />
              <path
                d="M514.379 218.56C560.78 208.922 619.531 195.45 690.392 151.54C692.741 150.088 694.187 147.538 694.22 144.775L694.981 75.7152C695.026 71.7451 691.941 68.4399 687.977 68.214C674.227 67.42 640.898 66.1805 592.05 68.795"
                stroke="#060709"
                stroke-width="2.58216"
                stroke-miterlimit="10"
              />
              <path
                d="M491.901 45.5361C490.984 41.1335 486.678 38.3061 482.269 39.2163L477.344 40.2427L472.418 41.2691C468.016 42.1858 465.188 46.4915 466.098 50.9005L470.63 72.7068C471.966 79.1493 467.977 85.495 461.592 87.0701C448.107 90.3946 422.512 97.5988 383.502 112.111C337.649 129.166 307.573 143.574 295.276 149.784C291.732 151.572 290.215 155.833 291.842 159.454L320.039 222.498"
                stroke="#060709"
                stroke-width="1.93662"
                stroke-miterlimit="10"
              />
              <path
                d="M470.677 11.1379C472.308 10.7993 473.911 11.851 474.249 13.4817L474.864 16.4398L468.941 17.6695L468.327 14.7114C467.988 13.0807 469.04 11.4778 470.671 11.1392L470.677 11.1379Z"
                fill="#060709"
              />
              <path
                d="M432.227 17.1647L471.295 14.0532"
                stroke="black"
                stroke-width="4.51877"
                stroke-miterlimit="10"
              />
              <path
                d="M507.225 1L472.863 13.1426"
                stroke="#060709"
                stroke-width="1.93662"
                stroke-miterlimit="10"
              />
              <path
                class="drone__camera"
                d="M520.119 155.278C523.436 144.683 517.276 133.324 506.361 129.908C495.446 126.491 483.909 132.311 480.593 142.906C477.276 153.501 483.436 164.86 494.351 168.276C505.266 171.693 516.803 165.873 520.119 155.278Z"
                fill="black"
              />
              <path
                class="drone__camera"
                d="M514.982 153.667C517.452 145.777 512.862 137.317 504.73 134.772C496.598 132.226 488.004 136.559 485.534 144.45C483.065 152.34 487.655 160.8 495.786 163.345C503.918 165.89 512.513 161.557 514.982 153.667Z"
                stroke="white"
                stroke-width="0.645539"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="drone__camera"
                d="M501.507 145.288C502.358 142.569 500.778 139.655 497.978 138.778C495.178 137.902 492.218 139.395 491.367 142.114C490.516 144.832 492.096 147.747 494.896 148.623C497.697 149.5 500.656 148.006 501.507 145.288Z"
                fill="#42C9D3"
              />
              <path
                d="M607.019 144.335L570.062 201.446C568.79 203.409 570.217 205.997 572.56 205.971L596.658 205.694L649.521 249.765C651.006 251.004 653.072 251.262 654.821 250.436L680.804 238.113C682.85 237.144 683.49 234.536 682.128 232.729L615.334 144.045C613.21 141.23 608.936 141.379 607.026 144.342L607.019 144.335Z"
                fill="#00B7B7"
              />
              <path
                d="M649.521 249.758C651.005 250.998 653.071 251.256 654.821 250.43L680.804 238.106C682.85 237.138 683.489 234.53 682.127 232.723L615.333 144.038C613.209 141.224 608.936 141.372 607.025 144.335L570.068 201.446C568.796 203.409 570.223 205.997 572.566 205.971"
                stroke="black"
                stroke-width="1.93662"
                stroke-miterlimit="10"
              />
              <path
                d="M674.033 221.968L615.334 144.038"
                stroke="black"
                stroke-width="3.87323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M646.947 202.679L593.561 189.807"
                stroke="white"
                stroke-width="3.87323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M624.817 187.684L599.68 181.622"
                stroke="white"
                stroke-width="1.29108"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M399.948 185.307L456.587 222.981C458.537 224.279 458.253 227.216 456.103 228.126L433.89 237.467L402.949 298.942C402.078 300.665 400.29 301.73 398.36 301.666L369.614 300.71C367.348 300.633 365.728 298.503 366.257 296.295L392.214 188.348C393.04 184.92 397.017 183.358 399.954 185.307H399.948Z"
                fill="#00B7B7"
              />
              <path
                d="M402.944 298.935C402.072 300.659 400.284 301.724 398.354 301.659L369.608 300.704C367.342 300.627 365.722 298.496 366.251 296.289L392.208 188.342C393.035 184.914 397.011 183.352 399.948 185.301L456.588 222.975C458.537 224.272 458.253 227.209 456.104 228.12"
                stroke="black"
                stroke-width="1.93662"
                stroke-miterlimit="10"
              />
              <path
                d="M369.395 283.204L392.201 188.342"
                stroke="black"
                stroke-width="3.87323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M386.561 254.729L430.406 221.651"
                stroke="white"
                stroke-width="3.87323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M400.885 232.154L421.529 216.584"
                stroke="white"
                stroke-width="1.29108"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            class="details"
            style="
              width: 81.1%;
              position: absolute;
              z-index: 10;
              top: 31.4%;
              left: 8.4%;
            "
          >
            <svg
              viewBox="0 0 983 308"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="details__body details-part"
                d="M160.571 99.5865L122.539 166.095C122.539 166.095 270.473 193.419 475.476 168.913L475.636 148.578L160.565 99.5801L160.571 99.5865Z"
                fill="#00B7B7"
              />
              <path
                class="details__body details-part"
                d="M474.877 169.605L475.037 149.27L356.93 130.9C328.531 134.173 297.051 139.611 263.137 147.528C190.889 164.385 157.218 148.828 141.616 132.367L121.934 166.787C121.934 166.787 269.868 194.111 474.87 169.605H474.877Z"
                fill="#009393"
              />
              <path
                class="details__body details-part"
                d="M368.646 134.16L155.83 100.201C153.249 99.7915 150.68 101.015 149.38 103.289L119.822 154.899C116.28 161.08 120.129 168.881 127.194 169.836C171.58 175.824 305.66 191.516 471.791 172.026C473.476 171.828 474.757 170.406 474.782 168.715L475 152.197C475.019 150.525 473.809 149.09 472.156 148.834L459.872 146.925"
                stroke="black"
                stroke-width="1.92148"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__body details-part"
                d="M347.848 165.077C350.487 165.077 352.627 162.937 352.627 160.299C352.627 157.66 350.487 155.521 347.848 155.521C345.21 155.521 343.07 157.66 343.07 160.299C343.07 162.937 345.21 165.077 347.848 165.077Z"
                stroke="white"
                stroke-width="3.20246"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M227.144 130.733L192.07 198.85C192.07 198.85 341.062 219.653 544.789 186.168L544.059 165.845L227.144 130.733Z"
                fill="#00B7B7"
              />
              <path
                class="details__body details-part"
                d="M544.219 186.885L543.489 166.562L424.69 153.4C396.464 157.915 365.253 164.73 331.717 174.126C260.282 194.142 225.959 180.076 209.652 164.314L191.5 199.567C191.5 199.567 340.491 220.37 544.219 186.885Z"
                fill="#009393"
              />
              <path
                class="details__body details-part"
                d="M217.574 134.096L190.065 187.436C186.44 194.462 189.918 200.784 197.783 201.501C241.913 205.511 376.666 214.1 542.996 186.994C544.014 186.828 544.757 185.924 544.719 184.893L544.117 168.144C544.078 167.132 543.31 166.293 542.304 166.178L223.883 130.733C221.289 130.432 218.779 131.777 217.574 134.096Z"
                stroke="black"
                stroke-width="2.56197"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__body details-part"
                d="M415.594 185.694C418.233 185.694 420.373 183.555 420.373 180.916C420.373 178.277 418.233 176.138 415.594 176.138C412.956 176.138 410.816 178.277 410.816 180.916C410.816 183.555 412.956 185.694 415.594 185.694Z"
                stroke="white"
                stroke-width="3.20246"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M115.024 300.284L112.084 232.853C111.982 230.535 109.343 229.26 107.466 230.631L88.1362 244.709L20.052 239.45C18.1433 239.303 16.3179 240.277 15.3827 241.955L1.45204 266.857C0.356802 268.817 1.3367 271.296 3.47594 271.975L108.465 305.306C111.796 306.363 115.171 303.781 115.018 300.291L115.024 300.284Z"
                fill="#00B7B7"
              />
              <path
                class="details__body details-part"
                d="M20.0637 239.444C18.155 239.297 16.3296 240.27 15.3945 241.948L1.46376 266.851C0.368521 268.811 1.34842 271.289 3.48766 271.968L108.477 305.299C111.808 306.356 115.183 303.775 115.029 300.284L112.09 232.853C111.987 230.535 109.348 229.26 107.472 230.631"
                stroke="black"
                stroke-width="1.92148"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M16.2148 276.01L108.478 305.299"
                stroke="black"
                stroke-width="3.84295"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__body details-part"
                d="M49.1992 276.042L99.7789 255.77"
                stroke="white"
                stroke-width="3.84295"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__body details-part"
                d="M75.7188 275.453L99.5386 265.903"
                stroke="white"
                stroke-width="1.28098"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__body details-part"
                d="M587.157 180.115C587.746 182.792 589.667 184.977 592.242 185.912C669.94 214.266 729.73 215.502 776.749 215.502C823.767 215.502 883.557 214.266 961.255 185.912C963.83 184.97 965.752 182.786 966.341 180.115L981.014 113.177C981.86 109.328 979.528 105.498 975.724 104.473C962.523 100.925 930.403 93.0018 882.417 85.681C841.592 79.4554 815.274 77.6236 801.504 77.1112C794.977 76.8678 789.821 71.5068 789.821 64.9802V42.8832C789.821 38.419 786.202 34.8066 781.745 34.8066H771.759C767.295 34.8066 763.683 38.4254 763.683 42.8832V64.9802C763.683 71.5068 758.527 76.8678 752 77.1112C738.229 77.6171 711.912 79.449 671.087 85.681C623.101 93.0018 590.98 100.925 577.78 104.473C573.975 105.498 571.644 109.328 572.489 113.177L587.163 180.115H587.157Z"
                fill="#02828B"
              />
              <path
                class="details__body details-part"
                d="M707.633 182.492C657.565 146.349 605.82 143.755 579.797 145.33L587.15 178.886C587.739 181.563 589.66 183.747 592.235 184.682C669.933 213.037 729.723 214.273 776.742 214.273C823.76 214.273 878.503 213.133 951.455 188.141C896.264 199.855 763.074 222.51 707.626 182.485L707.633 182.492Z"
                fill="#006A6D"
              />
              <path
                class="details__body details-part"
                d="M780.528 107.387L801.21 77.1175C794.683 76.8741 789.527 71.5132 789.527 64.9866V42.8896C789.527 38.4254 785.909 34.813 781.451 34.813H771.465C767.001 34.813 763.389 38.4318 763.389 42.8896V64.9866C763.389 71.321 758.534 76.5411 752.289 77.0663L772.465 107.342C774.38 110.212 778.588 110.237 780.535 107.387H780.528Z"
                fill="#00B7B7"
              />
              <path
                class="details__body details-part"
                d="M776.18 92.624V46.5342"
                stroke="white"
                stroke-width="0.640492"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M781.871 74.0754V46.5342"
                stroke="white"
                stroke-width="3.20246"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M782.117 34.9097H769.768V11.5445C769.768 11.1666 770.076 10.8592 770.454 10.8592H781.432C781.81 10.8592 782.117 11.1666 782.117 11.5445V34.9097Z"
                fill="#333438"
              />
              <path
                class="details__body details-part"
                d="M976.063 135.749C976.063 135.749 775.787 158.697 576.613 132.027"
                stroke="#00B7B7"
                stroke-width="1.28098"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M872.97 180.27L876.121 161.83C876.62 158.916 874.321 156.283 871.368 156.373L775.948 159.396L685.792 156.398C682.673 156.296 680.335 159.217 681.117 162.24L685.901 180.737C686.727 183.933 689.392 186.316 692.658 186.777C713.577 189.742 791.774 199.203 866.244 186.956C869.684 186.393 872.393 183.703 872.982 180.263L872.97 180.27Z"
                stroke="white"
                stroke-width="1.28098"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M890.879 86.4756C890.879 86.4756 880.676 124.662 840.043 169.989"
                stroke="#060709"
                stroke-width="3.20246"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M664.387 86.4756C664.387 86.4756 674.59 124.662 715.223 169.989"
                stroke="#060709"
                stroke-width="3.20246"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M776.34 215.227C823.358 215.227 883.148 213.991 960.846 185.636C963.421 184.695 965.343 182.511 965.932 179.84L980.606 112.902C981.451 109.053 979.12 105.223 975.315 104.198C962.115 100.649 929.994 92.7266 882.008 85.4058"
                stroke="#060709"
                stroke-width="2.56197"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M789.411 42.6083C789.411 38.1441 785.792 34.5317 781.334 34.5317H771.349C766.885 34.5317 763.273 38.1505 763.273 42.6083V64.7053C763.273 71.2319 758.117 76.5929 751.59 76.8363C737.819 77.3422 711.502 79.1741 670.677 85.406C622.691 92.7269 590.57 100.65 577.37 104.198C573.565 105.223 571.234 109.053 572.079 112.902L586.753 179.84"
                stroke="#060709"
                stroke-width="1.92148"
                stroke-miterlimit="10"
              />
              <path
                class="details__body details-part"
                d="M775.75 4.86377C777.402 4.86377 778.747 6.2088 778.747 7.86127V10.8588H772.746V7.86127C772.746 6.2088 774.091 4.86377 775.744 4.86377H775.75Z"
                fill="#060709"
              />
              <path
                class="details__body details-part"
                d="M737.168 3L775.751 7.86134"
                stroke="black"
                stroke-width="4.48345"
                stroke-miterlimit="10"
              />
              <path
                class="details__camera details-part"
                d="M590.409 186.4L592.227 186.622C593.88 186.823 595.058 188.328 594.857 189.981L592.594 208.54L584.787 207.588L587.049 189.03C587.251 187.377 588.756 186.199 590.409 186.4Z"
                fill="black"
              />
              <path
                class="details__camera details-part"
                d="M633.026 191.596L634.844 191.818C636.497 192.019 637.675 193.524 637.474 195.177L635.211 213.736L627.404 212.784L629.666 194.226C629.868 192.572 631.373 191.394 633.026 191.596Z"
                fill="black"
              />
              <path
                class="details__camera details-part"
                d="M594.497 236.149C596.991 215.692 588.167 197.786 574.789 196.156C561.411 194.525 548.544 209.787 546.05 230.244C543.557 250.701 552.38 268.607 565.759 270.237C579.137 271.868 592.004 256.607 594.497 236.149Z"
                fill="#132F56"
              />
              <path
                class="details__camera details-part"
                d="M597.378 234.608C595.54 249.711 584.601 266.677 573.815 265.364C559.173 263.577 558.866 239.681 560.704 224.578C562.542 209.475 570.401 203.57 581.187 204.883C591.973 206.196 599.223 219.505 597.385 234.602L597.378 234.608Z"
                fill="black"
              />
              <path
                class="details__camera details-part"
                d="M565.257 197.703C565.257 197.703 549.02 204.838 545.933 230.208C542.839 255.578 557.193 266.626 557.193 266.626"
                stroke="black"
                stroke-width="1.92148"
                stroke-miterlimit="10"
              />
              <path
                class="details__camera details-part"
                d="M590.164 199.919C590.164 199.919 573.864 202.718 568.221 215.47C566.197 220.049 566.466 234.563 566.031 247.52C565.563 261.412 576.093 271.756 589.601 275.036C620.895 282.619 628.037 269.515 628.037 269.515L624.937 251.094L639.13 209.417C639.13 209.417 617.654 197.017 590.164 199.925V199.919Z"
                fill="#132F56"
              />
              <path
                class="details__camera details-part"
                d="M547.316 252.087C547.316 252.087 551.966 255.091 558.685 254.297"
                stroke="white"
                stroke-width="1.92148"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__camera details-part"
                d="M562.542 210.256C562.542 210.256 557.411 208.373 552.422 209.398"
                stroke="white"
                stroke-width="1.28098"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__camera details-part"
                d="M635.513 208.181C635.513 208.181 619.276 215.316 616.189 240.686C613.102 266.056 627.449 277.104 627.449 277.104"
                stroke="black"
                stroke-width="1.92148"
                stroke-miterlimit="10"
              />
              <path
                class="details__camera details-part"
                d="M596.715 256.797C605.982 254.767 611.65 244.703 609.375 234.32C607.1 223.936 597.742 217.165 588.475 219.196C579.208 221.227 573.54 231.29 575.815 241.674C578.09 252.057 587.448 258.828 596.715 256.797Z"
                fill="black"
              />
              <path
                class="details__camera details-part"
                d="M595.637 251.903C602.541 250.391 606.764 242.895 605.069 235.162C603.375 227.429 596.404 222.387 589.5 223.899C582.597 225.412 578.374 232.908 580.068 240.641C581.763 248.374 588.733 253.416 595.637 251.903Z"
                stroke="white"
                stroke-width="0.640492"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__camera details-part"
                d="M595.895 237.236C598.272 236.715 599.726 234.133 599.143 231.469C598.559 228.805 596.158 227.068 593.781 227.588C591.404 228.109 589.95 230.691 590.534 233.355C591.117 236.02 593.518 237.757 595.895 237.236Z"
                fill="#42C9D3"
              />
              <path
                class="details__camera details-part"
                d="M642.232 181.91L580.212 174.35C576.121 173.851 572.4 176.763 571.902 180.854C571.403 184.944 574.315 188.665 578.406 189.164L640.427 196.724C644.517 197.222 648.238 194.31 648.736 190.22C649.235 186.129 646.323 182.409 642.232 181.91Z"
                fill="black"
              />
              <path
                class="details__camera details-part"
                d="M580.25 174.235L556.295 157.775C554.348 156.436 555.354 153.387 557.711 153.47L627.435 155.866C629.126 155.924 630.785 156.378 632.264 157.198L668.599 174.888C670.886 176.003 670.598 179.346 668.157 180.057L647.412 186.065L580.237 174.235H580.25Z"
                fill="black"
              />
              <path
                class="details__camera details-part"
                d="M558.59 151.997L630.005 155.904L668.607 174.882"
                stroke="white"
                stroke-width="1.92148"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__camera details-part"
                d="M567.039 255.225C569.671 265.505 577.447 272.416 588.566 275.023C625.631 283.714 628.283 270.142 628.283 270.142L626.72 260.855C608.133 271.852 578.786 265.441 567.039 255.225Z"
                fill="black"
              />
              <path
                class="details__camera details-part"
                d="M664.747 246.624C667.241 226.167 658.417 208.261 645.039 206.63C631.661 204.999 618.794 220.261 616.3 240.718C613.807 261.175 622.63 279.081 636.009 280.712C649.387 282.343 662.254 267.081 664.747 246.624Z"
                fill="#132F56"
              />
              <path
                class="details__camera details-part"
                d="M664.793 244.715C666.396 231.572 662.793 220.321 656.746 219.583C650.7 218.846 644.499 228.903 642.897 242.046C641.295 255.189 644.898 266.441 650.944 267.178C656.991 267.915 663.191 257.858 664.793 244.715Z"
                fill="#4253A5"
              />
              <path
                class="details__camera details-part"
                d="M634.938 215.585C634.938 215.585 641.278 217.014 645.198 219.467"
                stroke="white"
                stroke-width="1.92148"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__camera details-part"
                d="M664.794 246.289C666.948 228.62 661.467 213.415 652.552 212.329C643.636 211.242 634.663 224.684 632.509 242.353C630.355 260.023 635.837 275.227 644.752 276.314C653.667 277.401 662.641 263.958 664.794 246.289Z"
                stroke="black"
                stroke-width="1.92148"
                stroke-miterlimit="10"
              />
              <path
                class="details__camera details-part"
                d="M628.039 269.508C628.039 269.508 634.969 269.47 639.67 267.503"
                stroke="white"
                stroke-width="1.92148"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__parachute details-part"
                d="M220.957 241.314C220.957 241.314 312.272 224.661 338.417 230.112C364.562 235.562 420.099 243.588 451.701 257.006C483.303 270.424 483.303 278.206 483.303 278.206C483.303 278.206 440.633 269.521 359.086 259.478C277.538 249.435 220.963 241.32 220.963 241.32L220.957 241.314Z"
                fill="white"
              />
              <path
                class="details__parachute details-part"
                d="M483.295 278.206C483.295 278.206 325.715 283.016 220.949 241.32C220.949 241.32 335.777 269.239 393.735 263.123"
                stroke="black"
                stroke-width="1.92148"
                stroke-miterlimit="10"
              />
              <path
                class="details__parachute details-part"
                d="M220.956 241.314C220.956 241.314 182.789 248.154 173.457 241.314C164.125 234.473 220.956 241.314 220.956 241.314Z"
                stroke="black"
                stroke-width="1.92148"
                stroke-miterlimit="10"
              />
              <path
                class="details__battery details-part"
                d="M505.155 224.059H450.54C446.037 224.059 442.387 227.71 442.387 232.213V275.183C442.387 279.686 446.037 283.337 450.54 283.337H505.155C509.658 283.337 513.308 279.686 513.308 275.183V232.213C513.308 227.71 509.658 224.059 505.155 224.059Z"
                fill="#1D1F20"
              />
              <path
                class="details__battery details-part"
                d="M505.679 287.474H449.265C444 287.474 439.734 282.568 439.734 277.303V234.864C439.734 229.599 442.719 224.053 447.984 224.053H506.32C511.585 224.053 515.21 228.318 515.21 233.583L515.85 279.225C515.85 284.49 510.944 287.474 505.679 287.474Z"
                stroke="black"
                stroke-width="3.20246"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="details__battery details-part"
                d="M493.127 235.485H460.373C458.324 235.485 456.664 237.146 456.664 239.194V257.243C456.664 259.291 458.324 260.951 460.373 260.951H493.127C495.175 260.951 496.836 259.291 496.836 257.243V239.194C496.836 237.146 495.175 235.485 493.127 235.485Z"
                fill="#3F384C"
              />
              <path
                class="details__battery details-part"
                d="M466.34 271.552V278.508"
                stroke="white"
                stroke-width="1.28098"
                stroke-miterlimit="10"
              />
              <path
                class="details__battery details-part"
                d="M487.156 271.552V278.508"
                stroke="white"
                stroke-width="1.28098"
                stroke-miterlimit="10"
              />
              <path
                class="details__battery details-part details__body"
                d="M812.823 3L777 7.86133"
                stroke="#060709"
                stroke-width="1.92148"
                stroke-miterlimit="10"
              />
            </svg>
          </div>

          <div class="setup__buttons">
            <button
              class="button-purple setup-button setup-button1 setup-button_active"
              data-construct="start"
              style="top: 70%; left: 50%; transform: translate(-50%, 0)"
              data-btn_id_activity="assembly-btn-1"
              @click="activity($event)"
            >
              {{ translate('Достать комплекс из транспортировочного кейса') }}
            </button>

            <button
              class="button-purple setup-button setup-button2"
              data-construct="second"
              data-correct="1"
              style="top: 51%; left: 30%"
              data-btn_id_activity="assembly-btn-2"
              @click="activity($event)"
            >
              {{ translate('Прикрепить крылья') }}
            </button>
            <button
              class="button-purple setup-button setup-button2"
              data-construct="second"
              data-correct="2"
              style="top: 68%; left: 61.6%"
              data-btn_id_activity="assembly-btn-3"
              @click="activity($event)"
            >
              {{ translate('Прикрепить камеру') }}
            </button>

            <button
              class="button-purple setup-button setup-button3"
              data-construct="third"
              style="top: 75.4%; left: 25.4%"
              data-btn_id_activity="assembly-btn-4"
              @click="activity($event)"
            >
              {{ translate('Сложить парашют') }}
            </button>

            <button
              class="button-purple setup-button setup-button4"
              data-construct="fourth"
              style="top: 69.5%; left: 52.1%"
              data-btn_id_activity="assembly-btn-5"
              @click="activity($event)"
            >
              {{ translate('Поставить аккумулятор') }}
            </button>
          </div>

          <div
            class="setup__preview"
            data-aos="rm-opacity"
            data-aos-offset="20"
            data-aos-duration="800"
          >
            <img :src="media('src/assets/img/stage2-bg.svg')" alt="" />
          </div>

          <div class="statistic">
            <div
              class="statistic__part cp"
              data-right="0"
              data-btn_id_activity="assembly-btn-7"
              @click="activity($event)"
            >
              <div class="statistic__icon">
                <svg
                  width="112"
                  height="71"
                  viewBox="0 0 112 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M108.425 69C109.454 64.838 110 60.4841 110 56C110 54.4861 109.938 52.9868 109.816 51.5045L97.5248 52.5502C96.9745 52.597 96.4904 52.1889 96.4436 51.6386C96.3968 51.0883 96.8049 50.6042 97.3552 50.5574L109.615 49.5144C108.629 41.2784 105.789 33.6121 101.525 26.9447C101.466 27.0237 101.394 27.0953 101.311 27.1564L91.2017 34.509C90.755 34.8338 90.1296 34.7351 89.8047 34.2885C89.4799 33.8418 89.5786 33.2164 90.0252 32.8916L100.134 25.5389C100.242 25.4603 100.361 25.4065 100.483 25.3764C95.7911 18.5741 89.5793 12.901 82.338 8.84752L82.3307 8.86268L76.7962 20.0707C76.5517 20.5659 75.952 20.7691 75.4568 20.5246C74.9616 20.28 74.7584 19.6804 75.0029 19.1852L80.5374 7.97716C80.5498 7.95212 80.5631 7.92782 80.5772 7.9043C73.4832 4.27196 65.4801 2.163 56.9995 2.00906V14C56.9995 14.5523 56.5518 15 55.9995 15C55.4472 15 54.9995 14.5523 54.9995 14V2.00908C46.3085 2.167 38.1191 4.37813 30.8956 8.1779L36.331 19.1852C36.5755 19.6804 36.3723 20.28 35.8771 20.5246C35.3819 20.7691 34.7822 20.5659 34.5377 20.0707L29.1415 9.14267C22.2655 13.0925 16.3414 18.5122 11.7979 24.9731L21.3102 31.891C21.7568 32.2159 21.8556 32.8413 21.5307 33.288C21.2059 33.7346 20.5805 33.8334 20.1338 33.5085L10.6772 26.631C6.30397 33.3661 3.39122 41.1372 2.38775 49.4954C2.43279 49.4931 2.47851 49.4938 2.5247 49.4977L14.9798 50.5568C15.5301 50.6035 15.9382 51.0876 15.8914 51.6379C15.8447 52.1882 15.3606 52.5964 14.8103 52.5496L2.35526 51.4905C2.29783 51.4857 2.24195 51.476 2.18798 51.462C2.06349 52.9582 2 54.4717 2 56C2 60.4841 2.54612 64.838 3.57462 69H108.425ZM109.968 71C111.292 66.226 112 61.1956 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 61.1956 0.707561 66.226 2.03158 71H109.968ZM56 61C60.4183 61 64 57.4183 64 53C64 48.5817 60.4183 45 56 45C51.5817 45 48 48.5817 48 53C48 57.4183 51.5817 61 56 61ZM62 53C62 56.3137 59.3137 59 56 59C52.6863 59 50 56.3137 50 53C50 49.6863 52.6863 47 56 47C59.3137 47 62 49.6863 62 53Z"
                    fill="#9822D4"
                  />
                  <mask id="path-2-inside-1_139_3355" fill="white">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M87.165 71C87.9296 68.2432 88.3382 65.3383 88.3382 62.338C88.3382 44.4782 73.8599 30 56.0001 30C38.1403 30 23.6621 44.4782 23.6621 62.338C23.6621 65.3383 24.0707 68.2432 24.8353 71H87.165Z"
                    />
                  </mask>
                  <path
                    d="M87.165 71V73H88.6858L89.0923 71.5345L87.165 71ZM24.8353 71L22.908 71.5345L23.3145 73H24.8353V71ZM86.3382 62.338C86.3382 65.156 85.9545 67.8811 85.2377 70.4655L89.0923 71.5345C89.9046 68.6053 90.3382 65.5207 90.3382 62.338H86.3382ZM56.0001 32C72.7554 32 86.3382 45.5828 86.3382 62.338H90.3382C90.3382 43.3737 74.9645 28 56.0001 28V32ZM25.6621 62.338C25.6621 45.5828 39.2449 32 56.0001 32V28C37.0358 28 21.6621 43.3737 21.6621 62.338H25.6621ZM26.7625 70.4655C26.0458 67.8811 25.6621 65.156 25.6621 62.338H21.6621C21.6621 65.5207 22.0956 68.6053 22.908 71.5345L26.7625 70.4655ZM24.8353 73H87.165V69H24.8353V73Z"
                    fill="#9822D4"
                    fill-opacity="0.4"
                    mask="url(#path-2-inside-1_139_3355)"
                  />
                  <path
                    d="M29.3173 67.5007L52.2791 59.8222L48.889 52.576L28.4594 65.7112C27.4693 66.3478 28.201 67.874 29.3173 67.5007Z"
                    fill="#9822D4"
                  />
                </svg>
                <div class="active-icon">
                  <svg
                    width="112"
                    height="71"
                    viewBox="0 0 112 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M108.425 69C109.454 64.838 110 60.4841 110 56C110 54.4861 109.938 52.9868 109.816 51.5045L97.5248 52.5502C96.9745 52.597 96.4904 52.1889 96.4436 51.6386C96.3968 51.0883 96.8049 50.6042 97.3552 50.5574L109.615 49.5144C108.629 41.2784 105.789 33.6121 101.525 26.9447C101.466 27.0237 101.394 27.0953 101.311 27.1564L91.2017 34.509C90.755 34.8338 90.1296 34.7351 89.8047 34.2885C89.4799 33.8418 89.5786 33.2164 90.0252 32.8916L100.134 25.5389C100.242 25.4603 100.361 25.4065 100.483 25.3764C95.7911 18.5741 89.5793 12.901 82.338 8.84752L82.3307 8.86268L76.7962 20.0707C76.5517 20.5659 75.952 20.7691 75.4568 20.5246C74.9616 20.28 74.7584 19.6804 75.0029 19.1852L80.5374 7.97716C80.5498 7.95212 80.5631 7.92782 80.5772 7.9043C73.4832 4.27196 65.4801 2.163 56.9995 2.00906V14C56.9995 14.5523 56.5518 15 55.9995 15C55.4472 15 54.9995 14.5523 54.9995 14V2.00908C46.3085 2.167 38.1191 4.37813 30.8956 8.1779L36.331 19.1852C36.5755 19.6804 36.3723 20.28 35.8771 20.5246C35.3819 20.7691 34.7822 20.5659 34.5377 20.0707L29.1415 9.14267C22.2655 13.0925 16.3414 18.5122 11.7979 24.9731L21.3102 31.891C21.7568 32.2159 21.8556 32.8413 21.5307 33.288C21.2059 33.7346 20.5805 33.8334 20.1338 33.5085L10.6772 26.631C6.30397 33.3661 3.39122 41.1372 2.38775 49.4954C2.43279 49.4931 2.47851 49.4938 2.5247 49.4977L14.9798 50.5568C15.5301 50.6035 15.9382 51.0876 15.8914 51.6379C15.8447 52.1882 15.3606 52.5964 14.8103 52.5496L2.35526 51.4905C2.29783 51.4857 2.24195 51.476 2.18798 51.462C2.06349 52.9582 2 54.4717 2 56C2 60.4841 2.54612 64.838 3.57462 69H108.425ZM109.968 71C111.292 66.226 112 61.1956 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 61.1956 0.707561 66.226 2.03158 71H109.968ZM56 61C60.4183 61 64 57.4183 64 53C64 48.5817 60.4183 45 56 45C51.5817 45 48 48.5817 48 53C48 57.4183 51.5817 61 56 61ZM62 53C62 56.3137 59.3137 59 56 59C52.6863 59 50 56.3137 50 53C50 49.6863 52.6863 47 56 47C59.3137 47 62 49.6863 62 53Z"
                      fill="#008D7C"
                    />
                    <mask id="path-2-inside-1_139_2705" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M87.165 71C87.9296 68.2432 88.3382 65.3383 88.3382 62.338C88.3382 44.4782 73.8599 30 56.0001 30C38.1403 30 23.6621 44.4782 23.6621 62.338C23.6621 65.3383 24.0707 68.2432 24.8353 71H87.165Z"
                      />
                    </mask>
                    <path
                      d="M87.165 71V73H88.6858L89.0923 71.5345L87.165 71ZM24.8353 71L22.908 71.5345L23.3145 73H24.8353V71ZM86.3382 62.338C86.3382 65.156 85.9545 67.8811 85.2377 70.4655L89.0923 71.5345C89.9046 68.6053 90.3382 65.5207 90.3382 62.338H86.3382ZM56.0001 32C72.7554 32 86.3382 45.5828 86.3382 62.338H90.3382C90.3382 43.3737 74.9645 28 56.0001 28V32ZM25.6621 62.338C25.6621 45.5828 39.2449 32 56.0001 32V28C37.0358 28 21.6621 43.3737 21.6621 62.338H25.6621ZM26.7625 70.4655C26.0458 67.8811 25.6621 65.156 25.6621 62.338H21.6621C21.6621 65.5207 22.0956 68.6053 22.908 71.5345L26.7625 70.4655ZM24.8353 73H87.165V69H24.8353V73Z"
                      fill="#008D7C"
                      fill-opacity="0.4"
                      mask="url(#path-2-inside-1_139_2705)"
                    />
                    <path
                      d="M82.3841 36.9416L60.1239 46.4644L64.0928 53.4105L83.3849 38.6553C84.3199 37.9402 83.4663 36.4786 82.3841 36.9416Z"
                      fill="#1D1F20"
                    />
                    <circle
                      cx="56"
                      cy="53"
                      r="7"
                      stroke="#1D1F20"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="statistic__title">{{ translate('Барометр') }}</h3>
            </div>
            <div
              class="statistic__part mn"
              data-right="1"
              data-btn_id_activity="assembly-btn-8"
              @click="activity($event)"
            >
              <div
                class="statistic__icon"
                style="width: 112px; position: relative"
              >
                <svg
                  viewBox="0 0 112 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 36L112 36" stroke="#C888E9" stroke-width="2" />
                  <rect
                    x="1"
                    y="1"
                    width="110"
                    height="69"
                    rx="1"
                    stroke="#9822D4"
                    stroke-width="2"
                  />
                  <path d="M38 2V70" stroke="#C888E9" stroke-dasharray="4 4" />
                  <path d="M20 2V70" stroke="#C888E9" stroke-dasharray="4 4" />
                  <path d="M92 2V70" stroke="#C888E9" stroke-dasharray="4 4" />
                  <path d="M74 2V70" stroke="#C888E9" stroke-dasharray="4 4" />
                  <path d="M56 2V69" stroke="#C888E9" stroke-width="2" />
                </svg>
                <div class="active-icon">
                  <svg
                    class="active-icon"
                    viewBox="0 0 112 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="110"
                      height="69"
                      rx="1"
                      stroke="#008D7C"
                      stroke-width="2"
                    />
                    <path d="M2 36L110 36" stroke="#74C5B9" stroke-width="2" />
                    <path
                      d="M38 2V70"
                      stroke="#74C5B9"
                      stroke-dasharray="4 4"
                    />
                    <path
                      d="M20 2V70"
                      stroke="#74C5B9"
                      stroke-dasharray="4 4"
                    />
                    <path
                      d="M92 2V70"
                      stroke="#74C5B9"
                      stroke-dasharray="4 4"
                    />
                    <path
                      d="M74 2V70"
                      stroke="#74C5B9"
                      stroke-dasharray="4 4"
                    />
                    <path d="M56 2V69" stroke="#DE234B" stroke-width="2" />
                    <path
                      d="M56.5 27.5L61.0015 21.3616C61.4509 20.7488 62.3927 20.8414 62.7141 21.5301L64.7788 25.9545C65.1018 26.6467 66.0502 26.7358 66.4965 26.116L74.2007 15.4157C74.3886 15.1547 74.6906 15 75.0122 15H103.13C103.369 15 103.6 14.9146 103.781 14.7593L110.5 9"
                      stroke="#1D1F20"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2 17H8.5011C9.00787 17 9.43452 17.3791 9.49415 17.8823L12.7004 44.9446C12.7413 45.2897 12.9584 45.5889 13.2739 45.7347L18.9181 48.3438C19.5807 48.6501 20.3377 48.1661 20.3377 47.4361V30.0057C20.3377 29.2906 21.0664 28.8066 21.7255 29.084L26.3355 31.0237C26.9197 31.2695 27.5822 30.9168 27.7045 30.2949L28.6739 25.3655C28.7712 24.871 29.2213 24.5261 29.7242 24.5609L42.502 25.4449C42.9679 25.4771 43.3495 25.8276 43.4211 26.2892L48.6739 60.1533C48.7494 60.6406 49.1689 61 49.662 61H55"
                      stroke="#1D1F20"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="statistic__title">{{ translate('Магнитометр') }}</h3>
            </div>
            <div class="statistic__column">
              <div
                class="statistic__part statistic__part_small cp"
                data-right="4"
                data-btn_id_activity="assembly-btn-9"
                @click="activity($event)"
              >
                <div class="statistic__icon">
                  <svg
                    width="50"
                    height="21"
                    viewBox="0 0 51 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M41.0176 2.5H4C2.89543 2.5 2 3.39543 2 4.5V16.5C2 17.6046 2.89543 18.5 4 18.5H41.0176C42.1222 18.5 43.0176 17.6046 43.0176 16.5V15.2664C43.006 15.1792 43 15.0903 43 15V6.5C43 6.40968 43.006 6.32076 43.0176 6.23361V4.5C43.0176 3.39543 42.1222 2.5 41.0176 2.5ZM41.0176 20.5C43.0574 20.5 44.7406 18.9731 44.9866 17L45 17H48.5029C49.6075 17 50.5029 16.1046 50.5029 15V6.5C50.5029 5.39543 49.6075 4.5 48.5029 4.5H45.0176C45.0176 2.29086 43.2267 0.5 41.0176 0.5H4C1.79086 0.5 0 2.29086 0 4.5V16.5C0 18.7091 1.79086 20.5 4 20.5H41.0176ZM48.5029 15H45.0176V6.5H48.5029V15ZM6.9834 5.5C5.87883 5.5 4.9834 6.39543 4.9834 7.5V13.5C4.9834 14.6046 5.87883 15.5 6.9834 15.5H12.799V5.5H6.9834Z"
                      fill="#008D7C"
                    />
                  </svg>
                  <div class="active-icon">
                    <img
                      :src="
                        media('src/assets/img/setup-statistic/batterry.png')
                      "
                      alt=""
                    />
                  </div>
                </div>
                <h3 class="statistic__title">{{ translate('Аккумулятор') }}</h3>
              </div>
              <div
                class="statistic__part statistic__part_small cp"
                data-right="5"
                data-btn_id_activity="assembly-btn-10"
                @click="activity($event)"
              >
                <div class="statistic__icon" style="margin: 0 auto">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 34 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Frame 240459169">
                      <path
                        id="Union"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.3725 18.9438C20.9372 18.1336 22.0003 16.5467 22.0003 14.7218C22.0003 12.0736 19.7617 9.92676 17.0003 9.92676C14.2388 9.92676 12.0003 12.0736 12.0003 14.7218C12.0003 16.681 13.2256 18.3658 14.9813 19.1098L7.0723 38.8036C6.86648 39.3161 7.11509 39.8984 7.62759 40.1042C8.1401 40.3101 8.72241 40.0615 8.92823 39.549L11.1797 33.9428H22.9392L25.0656 39.5319C25.262 40.0481 25.8397 40.3073 26.3559 40.1109C26.872 39.9145 27.1313 39.3369 26.9349 38.8207L19.3725 18.9438ZM16.9732 19.5167L17.0003 19.5168C17.1496 19.5168 17.2975 19.5105 17.4435 19.4982L20.3539 27.1478H13.9085L16.9732 19.5167ZM22.1782 31.9428H11.9829L13.1053 29.1478H21.1149L22.1782 31.9428Z"
                        fill="#9822D4"
                      />
                      <circle
                        id="Ellipse 288"
                        cx="17"
                        cy="15"
                        r="3"
                        fill="#F9EEFD"
                      />
                    </g>
                  </svg>
                  <div class="active-icon">
                    <img
                      :src="media('src/assets/img/setup-statistic/radio.png')"
                      alt=""
                      style="margin-top: 0px; margin-right: 4px; width: 35px"
                    />
                  </div>
                </div>
                <h3 class="statistic__title" style="margin-left: auto">
                  {{ translate('Радиосвязь') }}
                </h3>
              </div>
            </div>
            <div
              class="statistic__part mtr"
              data-right="3"
              data-btn_id_activity="assembly-btn-11"
              @click="activity($event)"
            >
              <div class="statistic__icon">
                <svg
                  width="112"
                  height="71"
                  viewBox="0 0 112 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="motor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.9356 0.0292969C34.831 0.0292969 33.9356 0.924726 33.9356 2.0293V8.26118C33.9356 9.36575 34.831 10.2612 35.9356 10.2612H45.2659V17.4931H49.2659V10.2612H53.4861V17.4931H57.4861V10.2612H66.8163C67.9209 10.2612 68.8163 9.36575 68.8163 8.26118V2.0293C68.8163 0.924726 67.9209 0.0292969 66.8163 0.0292969H35.9356ZM35.9356 2.0293L66.8163 2.0293V8.26118H35.9356V2.0293ZM93.5044 50.3626H99.6971V61.8343C99.6971 62.9025 100.563 63.7684 101.631 63.7684C107.342 63.7684 111.972 59.1385 111.972 53.4273V35.0661C111.972 29.3548 107.342 24.7249 101.631 24.7249C100.563 24.7249 99.6971 25.5909 99.6971 26.6591V38.1307H93.5044V42.1307H99.6971V46.3626H93.5044V50.3626ZM101.697 61.7682V50.3626H101.725V46.3626H101.697V42.1307H101.725V38.1307H101.697V26.7252C106.273 26.7606 109.972 30.4814 109.972 35.0661V53.4273C109.972 58.012 106.273 61.7328 101.697 61.7682ZM9.27505 42.1307V46.3626H2.05487V50.3626H9.27505V58.167C9.27505 59.2715 10.1705 60.167 11.2751 60.167H30.3958L39.5657 69.8333C39.9434 70.2314 40.468 70.4568 41.0167 70.4568H91.4769C92.5815 70.4568 93.4769 69.5614 93.4769 68.4568V26.7249C93.4769 25.6204 92.5814 24.7249 91.4769 24.7249L80.8517 24.725L78.7565 18.8502C78.4725 18.0538 77.7183 17.5221 76.8727 17.5221H25.7205C25.0395 17.5221 24.4053 17.8686 24.0374 18.4416L20.0039 24.7249H11.2751C10.1705 24.7249 9.27505 25.6204 9.27505 26.7249V38.1307H2.05487V42.1307H9.27505ZM76.8727 19.5221L25.7205 19.5221L21.687 25.8054C21.3191 26.3784 20.6849 26.7249 20.0039 26.7249H11.2751V58.167H30.3958C30.9445 58.167 31.4691 58.3924 31.8468 58.7905L41.0167 68.4568H91.4769V26.7249H80.8517C80.0061 26.7249 79.2519 26.1932 78.9679 25.3968L76.8727 19.5221ZM2.02734 25.7249C2.02734 25.1727 1.57963 24.7249 1.02734 24.7249C0.475059 24.7249 0.0273438 25.1727 0.0273438 25.7249V59.6815C0.0273438 60.2338 0.475059 60.6815 1.02734 60.6815C1.57963 60.6815 2.02734 60.2338 2.02734 59.6815V25.7249Z"
                    fill="#9822D4"
                  />
                  <path
                    style="display: none"
                    d="M44.3518 42.2163L57.4148 26.3993C58.0929 25.5783 59.4137 26.2447 59.1562 27.2778L55.902 40.3364C55.7448 40.9674 56.2221 41.5782 56.8724 41.5782H60.8847C61.7292 41.5782 62.1935 42.5602 61.6575 43.2129L48.5979 59.1151C47.9034 59.9607 46.5502 59.2369 46.8682 58.1899L50.8303 45.1437C51.0253 44.5014 50.5447 43.8531 49.8734 43.8531H45.1228C44.2771 43.8531 43.8132 42.8684 44.3518 42.2163Z"
                    fill="#FFC700"
                  />
                </svg>
                <div class="active-icon">
                  <svg
                    width="112"
                    height="71"
                    viewBox="0 0 112 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="motor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.9356 0.0292969C34.831 0.0292969 33.9356 0.924726 33.9356 2.0293V8.26118C33.9356 9.36575 34.831 10.2612 35.9356 10.2612H45.2659V17.4931H49.2659V10.2612H53.4861V17.4931H57.4861V10.2612H66.8163C67.9209 10.2612 68.8163 9.36575 68.8163 8.26118V2.0293C68.8163 0.924726 67.9209 0.0292969 66.8163 0.0292969H35.9356ZM35.9356 2.0293L66.8163 2.0293V8.26118H35.9356V2.0293ZM93.5044 50.3626H99.6971V61.8343C99.6971 62.9025 100.563 63.7684 101.631 63.7684C107.342 63.7684 111.972 59.1385 111.972 53.4273V35.0661C111.972 29.3548 107.342 24.7249 101.631 24.7249C100.563 24.7249 99.6971 25.5909 99.6971 26.6591V38.1307H93.5044V42.1307H99.6971V46.3626H93.5044V50.3626ZM101.697 61.7682V50.3626H101.725V46.3626H101.697V42.1307H101.725V38.1307H101.697V26.7252C106.273 26.7606 109.972 30.4814 109.972 35.0661V53.4273C109.972 58.012 106.273 61.7328 101.697 61.7682ZM9.27505 42.1307V46.3626H2.05487V50.3626H9.27505V58.167C9.27505 59.2715 10.1705 60.167 11.2751 60.167H30.3958L39.5657 69.8333C39.9434 70.2314 40.468 70.4568 41.0167 70.4568H91.4769C92.5815 70.4568 93.4769 69.5614 93.4769 68.4568V26.7249C93.4769 25.6204 92.5814 24.7249 91.4769 24.7249L80.8517 24.725L78.7565 18.8502C78.4725 18.0538 77.7183 17.5221 76.8727 17.5221H25.7205C25.0395 17.5221 24.4053 17.8686 24.0374 18.4416L20.0039 24.7249H11.2751C10.1705 24.7249 9.27505 25.6204 9.27505 26.7249V38.1307H2.05487V42.1307H9.27505ZM76.8727 19.5221L25.7205 19.5221L21.687 25.8054C21.3191 26.3784 20.6849 26.7249 20.0039 26.7249H11.2751V58.167H30.3958C30.9445 58.167 31.4691 58.3924 31.8468 58.7905L41.0167 68.4568H91.4769V26.7249H80.8517C80.0061 26.7249 79.2519 26.1932 78.9679 25.3968L76.8727 19.5221ZM2.02734 25.7249C2.02734 25.1727 1.57963 24.7249 1.02734 24.7249C0.475059 24.7249 0.0273438 25.1727 0.0273438 25.7249V59.6815C0.0273438 60.2338 0.475059 60.6815 1.02734 60.6815C1.57963 60.6815 2.02734 60.2338 2.02734 59.6815V25.7249Z"
                      fill="#008D7C"
                    />
                    <path
                      class="mtr-decor"
                      d="M44.3518 42.2163L57.4148 26.3993C58.0929 25.5783 59.4137 26.2447 59.1562 27.2778L55.902 40.3364C55.7448 40.9674 56.2221 41.5782 56.8724 41.5782H60.8847C61.7292 41.5782 62.1935 42.5602 61.6575 43.2129L48.5979 59.1151C47.9034 59.9607 46.5502 59.2369 46.8682 58.1899L50.8303 45.1437C51.0253 44.5014 50.5447 43.8531 49.8734 43.8531H45.1228C44.2771 43.8531 43.8132 42.8684 44.3518 42.2163Z"
                      fill="#FFC700"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="statistic__title">{{ translate('Двигатель') }}</h3>
            </div>
            <div
              class="statistic__part cp"
              data-right="2"
              data-btn_id_activity="assembly-btn-12"
              @click="activity($event)"
            >
              <div
                class="statistic__icon"
                style="width: 112px; position: relative"
              >
                <svg
                  width="114"
                  height="73"
                  viewBox="0 0 114 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M109.311 0.67787C111.286 -0.140591 113.459 1.31121 113.459 3.44939V67.7586C113.459 69.7746 111.489 71.2549 109.538 70.5591C102.001 67.8723 92.6725 63.4554 86.1961 60.1832C83.1104 58.6242 79.6128 58.0821 76.239 58.7262L4.10365 72.4992C2.25459 72.8522 0.541016 71.4349 0.541016 69.5524V68.518C0.541016 60.8684 4.78433 53.8501 11.5582 50.2961L94.1392 6.96837L94.1793 6.94736L94.221 6.93005L109.311 0.67787ZM111.459 3.44939C111.459 2.73666 110.735 2.25273 110.076 2.52555L95.0284 8.76041L12.4874 52.0671C6.37191 55.2757 2.54102 61.6119 2.54102 68.518V69.5524C2.54102 70.1799 3.11221 70.6524 3.72856 70.5347L11.9033 68.9738V65.1289C11.9033 63.737 12.8608 62.5278 14.2157 62.2088L77.6016 47.2825L78.8309 46.993V48.2559V56.4619C79.7433 56.4497 80.6536 56.5103 81.5537 56.6406L83.5215 47.294C83.6352 46.7536 84.1656 46.4077 84.706 46.5215C85.2465 46.6352 85.5923 47.1656 85.4786 47.706L83.5138 57.0385C84.7474 57.3619 85.9495 57.8178 87.098 58.3981C87.1317 58.4152 87.1655 58.4322 87.1993 58.4493L89.0215 49.794C89.1352 49.2536 89.6656 48.9077 90.206 49.0215C90.7465 49.1352 91.0923 49.6656 90.9786 50.206L89.0483 59.3747C90.0269 59.8604 91.0517 60.3625 92.11 60.8733L94.0215 51.794C94.1352 51.2536 94.6656 50.9077 95.206 51.0215C95.7465 51.1352 96.0923 51.6656 95.9786 52.206L93.9786 61.706L93.7465 61.6572C99.0919 64.1976 105.086 66.8487 110.209 68.6753C110.806 68.8881 111.459 68.4481 111.459 67.7586V3.44939ZM75.8639 56.7617L13.9033 68.592V65.1289C13.9033 64.6649 14.2225 64.2619 14.6741 64.1555L76.8309 49.5187V56.6059C76.508 56.6484 76.1855 56.7003 75.8639 56.7617Z"
                    fill="#9822D4"
                  />
                </svg>
                <div class="active-icon">
                  <svg
                    width="114"
                    height="73"
                    viewBox="0 0 114 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M109.311 0.67787C111.286 -0.140591 113.459 1.31121 113.459 3.44939V67.7586C113.459 69.7746 111.489 71.2549 109.538 70.5591C102.001 67.8723 92.6725 63.4554 86.1961 60.1832C83.1104 58.6242 79.6128 58.0821 76.239 58.7262L4.10365 72.4992C2.25459 72.8522 0.541016 71.4349 0.541016 69.5524V68.518C0.541016 60.8684 4.78433 53.8501 11.5582 50.2961L94.1392 6.96837L94.1793 6.94736L94.221 6.93005L109.311 0.67787ZM111.459 3.44939C111.459 2.73666 110.735 2.25273 110.076 2.52555L95.0284 8.76041L12.4874 52.0671C6.37191 55.2757 2.54102 61.6119 2.54102 68.518V69.5524C2.54102 70.1799 3.11221 70.6524 3.72856 70.5347L12.9033 68.7829V65.1289C12.9033 64.201 13.5416 63.3949 14.4449 63.1822L77.8309 48.2559V56.5044C78.9406 56.4246 80.0514 56.4539 81.1489 56.5868L83 47.7942C83.1138 47.2538 83.6441 46.9079 84.1846 47.0217C84.725 47.1354 85.0709 47.6658 84.9571 48.2062L83.1185 56.9396C84.3919 57.2427 85.6345 57.6863 86.8226 58.2619L88.5 50.2942C88.6138 49.7538 89.1441 49.4079 89.6846 49.5217C90.225 49.6354 90.5709 50.1658 90.4571 50.7062L88.6716 59.1874C89.6474 59.6733 90.672 60.1771 91.7323 60.6907L93.5 52.2942C93.6138 51.7538 94.1441 51.4079 94.6846 51.5217C95.225 51.6354 95.5709 52.1658 95.4571 52.7062L93.5885 61.582C98.9736 64.1452 105.035 66.8307 110.209 68.6753C110.806 68.8881 111.459 68.4481 111.459 67.7586V3.44939Z"
                      fill="#008D7C"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="statistic__title">{{ translate('Элевоны') }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
