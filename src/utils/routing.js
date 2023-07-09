import { inject } from 'vue'

export default () => {
  const translate = inject('translate')

  const popup = document.querySelector('.popup')
  const popupFinished = document.querySelector('.popup-complete')
  const popupLoading = document.querySelector('.popup-loading')
  const zigzagCorrectPoints = [1, 6, 0]
  let counter = 0
  let zigzag = true

  document.addEventListener('click', e => {
    if (e.target.classList.contains('route-map__point')) {
      if (zigzag) {
        let points = [...document.querySelectorAll('.route-map__point')]
        let elPos = points.indexOf(e.target)
        if (elPos === counter + 1) {
          e.target.classList.add('route-map__point_active')
          document
            .querySelectorAll('.route-map__line')
            [counter].classList.add('route-map__line_active')

          ++counter
        } else {
          callPopup(popup)
        }
      } else {
        let points = [...document.querySelectorAll('.route-map__point')]
        let elPos = points.indexOf(e.target)
        if (elPos === zigzagCorrectPoints[counter]) {
          e.target.textContent = `${counter + 2}`
          e.target.classList.add('route-map__point_active')
          document
            .querySelectorAll('.route-map__line-zigzag')
            [counter].classList.add('route-map__line-zigzag_active')

          ++counter
        } else {
          callPopup(popup)
        }
      }
    }

    if (e.target.classList.contains('security-center__answears-button')) {
      let answears = document.querySelectorAll(
        '.security-center__answears-button'
      )
      answears.forEach(el => {
        el.classList.remove('security-center__answears-button_incorrect')
        el.classList.remove('security-center__answears-button_checked')
      })

      e.target.classList.add('security-center__answears-button_checked')

      document
        .querySelector('.security-center__answear-complete')
        .classList.remove('security-center__answear-complete_disabled')
    }
    if (e.target.classList.contains('security-center__answear-complete')) {
      let choice = document.querySelector(
        '.security-center__answears-button_checked'
      )
      let points = [
        ...document.querySelectorAll('.security-center__answears-button'),
      ]
      let elPos = points.indexOf(choice)
      if (
        elPos ===
        parseInt(
          document.querySelector('.security-center__answears').dataset.correct
        )
      ) {
        popup.querySelector('.popup__title').textContent = translate(
          'Ой, это неверный вариант!'
        )

        choice.classList.add('security-center__answears-button_correct')
        let answears = document.querySelectorAll(
          '.security-center__answears-button'
        )
        answears.forEach(el => {
          el.style.pointerEvents = 'none'
        })

        document.querySelector(
          '.security-center__answear-complete'
        ).style.backgroundColor = '#E1E7EB'
        document.querySelector(
          '.security-center__answear-complete'
        ).style.border = '1px solid #E1E7EB'
        document.querySelector(
          '.security-center__answear-complete'
        ).style.color = '#080809'
        document.querySelector(
          '.security-center__answear-complete'
        ).textContent = translate('Готово')

        window.setTimeout(() => {
          popupLoading.classList.add('_opened')
        }, 1000)

        window.setTimeout(() => {
          popupLoading.classList.remove('_opened')
          popupFinished.classList.add('_opened')
        }, 6000)
      } else if (elPos === 0) {
        choice.classList.add('security-center__answears-button_incorrect')
        callPopup(popup)
        popup.querySelector('.popup__title').textContent = translate(
          'Слишком низко, можно зацепиться за деревья!'
        )
      } else if (elPos === 2) {
        choice.classList.add('security-center__answears-button_incorrect')
        callPopup(popup)
        popup.querySelector('.popup__title').textContent = translate(
          'Слишком высоко, данные с камеры получатся нечёткими!'
        )
      }

      document
        .querySelector('.security-center__answear-complete')
        .classList.add('security-center__answear-complete_disabled')
    }

    if (zigzag) {
      if (counter === 7) {
        window.setTimeout(() => {
          secondStep()
          zigzag = false
          counter = 0
          document
            .querySelector('.route-steps__part_active')
            .classList.add('_finished')
          document.querySelectorAll('.route-steps__part').forEach(el => {
            el.classList.remove('route-steps__part_active')
          })
          document
            .querySelectorAll('.route-steps__part')[1]
            .classList.add('route-steps__part_active')
        }, 1000)
      }
    } else {
      if (counter === 3) {
        window.setTimeout(() => {
          document
            .querySelector('.route-steps__part_active')
            .classList.add('_finished')
          document.querySelectorAll('.route-steps__part').forEach(el => {
            el.classList.remove('route-steps__part_active')
          })

          document.querySelectorAll('.route-map__point').forEach(el => {
            el.style.display = 'none'
          })
          document.querySelectorAll('.route-map__label').forEach(el => {
            el.style.display = 'none'
          })
          document.querySelectorAll('.route-map__city').forEach(el => {
            el.style.display = 'none'
          })
          document.querySelectorAll('.route-map__line').forEach(el => {
            el.style.display = 'none'
          })
          document.querySelectorAll('.route-map__line-zigzag').forEach(el => {
            el.style.display = 'none'
          })

          document
            .querySelectorAll('.route-steps__part')[2]
            .classList.add('route-steps__part_active')

          document.querySelectorAll('.route-map__bg')[0].style.display = 'none'
          document.querySelectorAll('.route-map__bg')[1].style.display = 'block'

          counter = 0
        }, 1000)
      }
    }
  })

  // for popup
  document.addEventListener('click', e => {
    if (
      !e.target.closest('.popup') &&
      popup.classList.contains('clickable') &&
      popup.classList.contains('_opened')
    ) {
      closePopup(popup)
    }
    if (e.target.closest('.popup__close-btn')) {
      closePopup(popup)
    }
  })
  // for popup
  document.addEventListener('keydown', function (event) {
    if (popup.classList.contains('_opened')) {
      if (event.key == 'Escape') {
        closePopup(popup)
      }
    }
  })

  function callPopup(popup) {
    popup.classList.remove('clickable')
    popup.classList.add('_opened')

    window.localStorage.setItem('error', true)
    window.setTimeout(() => {
      popup.classList.add('clickable')
    }, 5)
  }
  function closePopup(popup) {
    popup.classList.remove('_opened')
    popup.classList.remove('clickable')
  }

  function secondStep() {
    document.querySelectorAll('.route-map__line').forEach(el => {
      el.classList.add('disabled')
    })
    document.querySelectorAll('.route-map__point').forEach(el => {
      el.classList.remove('route-map__point_active')
    })
    document.querySelectorAll('.route-map__label').forEach(el => {
      el.classList.add('stage2')
    })
    document
      .querySelectorAll('.route-map__point')
      [document.querySelectorAll('.route-map__point').length - 1].classList.add(
        'route-map__point_active'
      )
    document.querySelectorAll('.route-map__point')[
      document.querySelectorAll('.route-map__point').length - 1
    ].textContent = 1
  }
}
