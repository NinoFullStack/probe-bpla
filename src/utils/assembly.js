import { inject } from 'vue'

export default () => {
  const translate = inject('translate')

  const popup = document.querySelector('.popup')
  const popupFinished = document.querySelector('.popup-finished')
  const steps = document.querySelectorAll('.steps-nav__el')
  let counter = 0
  let checkStep = 0

  const messages = [
    translate(
      'Этот прибор позволяет определить высоту по показателям атмосферного давления'
    ),
    translate(
      'Если отключится GPS, этот прибор, как компас, поможет сориентироваться по сторонам света'
    ),
    translate(
      'Эти детали на задней кромке крыла управляют креном, то есть поворотами, и изменением высоты'
    ),
    translate(
      'Эта установка внутри БПЛА набирает обороты и толкает всю машину вперёд'
    ),
    translate(
      'Этот беспилотник летит без топлива, а значит нужно проверить напряжение и уровень заряда батареи'
    ),
    translate(
      'Если БПЛА потеряет связь с наземной станцией, можно провалить задание и даже лишиться техники'
    ),
  ]

  document.addEventListener('click', e => {
    if (e.target.dataset.construct === 'start') {
      startConstruct(counter, steps)

      ++counter
    }

    if (e.target.hasAttribute('data-correct')) {
      if (parseInt(e.target.dataset.correct) === counter) {
        e.target.classList.remove('setup-button_active')
        e.target.style.display = 'none'
        counter = counter + 1
      } else {
        callPopup(popup)
      }
    }

    if (e.target.classList.contains('setup-button3')) {
      document.querySelectorAll('.details__parachute').forEach(el => {
        el.classList.add('hidden')
      })
      e.target.classList.remove('setup-button_active')
      e.target.style.display = 'none'
      ++counter
    }

    if (e.target.classList.contains('setup-button4')) {
      document.querySelectorAll('.details__battery').forEach(el => {
        el.classList.add('hidden')
      })
      e.target.classList.remove('setup-button_active')
      e.target.style.display = 'none'
      ++counter
    }

    if (e.target.classList.contains('setup__button')) {
      checkDetails()
      document.querySelector('.statistic').classList.add('statistic_showed')
    }

    if (e.target.closest('.statistic__part')) {
      let el = e.target.closest('.statistic__part')
      if (parseInt(el.dataset.right) === checkStep) {
        el.classList.add('statistic__part_choosed')

        if (checkStep != 5) {
          document.querySelector('.setup-body__message-step').textContent = `${
            checkStep + 2
          }/6`
          document.querySelector('.setup-body__message-text').textContent =
            messages[checkStep + 1]
        } else {
          document.querySelector(
            '.setup-body__message-step'
          ).textContent = `6/6`
          document.querySelector('.setup-body__message-text').textContent = ''
          document.querySelector('.setup-body__message-text').style.display =
            'none'
          document
            .querySelector('.setup-body__message')
            .classList.add('setup-body__message_finished')

          window.setTimeout(() => {
            popupFinished.classList.add('_opened')
          }, 1000)
        }

        ++checkStep
      } else {
        callPopup(popup)
      }
    }

    if (counter === 1) {
      window.setTimeout(() => {
        document.querySelectorAll('.setup-button2').forEach(el => {
          el.classList.add('setup-button_active')
        })
      }, 1000)
    } else if (counter === 2) {
      steps[counter - 1].classList.add('steps-nav__el_finished')
      document.querySelectorAll('.details__body').forEach(el => {
        el.classList.add('hidden')
      })
      window.setTimeout(() => {
        document.querySelector('.drone').classList.add('showed')
      }, 600)
    } else if (counter === 3) {
      steps[counter - 1].classList.add('steps-nav__el_finished')
      document.querySelectorAll('.details__camera').forEach(el => {
        el.classList.add('hidden')
      })
      document.querySelectorAll('.drone__camera').forEach(el => {
        el.classList.add('drone__camera_showed')
      })

      window.setTimeout(() => {
        document
          .querySelector('.setup-button3')
          .classList.add('setup-button_active')
      }, 600)
    } else if (counter === 4) {
      steps[counter - 1].classList.add('steps-nav__el_finished')

      window.setTimeout(() => {
        document
          .querySelector('.setup-button4')
          .classList.add('setup-button_active')
      }, 600)
    } else if (counter === 5) {
      steps[counter - 1].classList.add('steps-nav__el_finished')

      document.querySelector('.setup__button').removeAttribute('disabled')
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

  function startConstruct(counter, steps) {
    document.querySelector('.bag').style.transform = 'translate(-50%, 200px)'
    document.querySelector('.bag').style.opacity = 0
    document.querySelector('.bag').style.pointerEvents = 'none'
    document.querySelector('.setup-button1').style.transform =
      'translate(-50%, 200px)'
    document.querySelector('.setup-button1').style.opacity = 0
    document.querySelector('.setup-button1').style.pointerEvents = 'none'
    document
      .querySelector('.setup-button1')
      .classList.remove('setup-button_active')

    steps[counter].classList.add('steps-nav__el_finished')

    window.setTimeout(() => {
      showDetails()
    }, 600)
  }

  function showDetails() {
    document.querySelector('.details').classList.add('showed')
  }

  function checkDetails() {
    document.querySelector('.setup-body__section_first').style.display = 'none'
    document.querySelector('.bag').style.display = 'none'
    document.querySelector('.details').style.display = 'none'
    document.querySelector('.setup__buttons').style.display = 'none'
    document.querySelector('.setup-body__section_second').style.display =
      'block'
  }
}
