export default () => {
  const popup = document.querySelector('.popup')
  const popupFinished = document.querySelector('.popup-finished')
  const map = document.querySelector('.nerp-map')
  let counter = 0
  const activeSteps = document.querySelectorAll('.steps-nav__el_active')

  document.addEventListener('click', e => {
    if (e.target.nodeName === 'IMG') {
      callPopup(popup)
    }

    if (e.target.classList.contains('visor-switch')) {
      e.target.classList.toggle('active')
    }

    if (e.target.classList.contains('nerp-map__box')) {
      e.target.classList.add('nerp-map__box_active')

      if (counter === 0) {
        document
          .querySelectorAll('.nerp-map__incorrect-box')[0]
          .classList.add('nerp-map__incorrect-box_disabled')
      } else if (counter === 1) {
        document
          .querySelectorAll('.nerp-map__incorrect-box')[1]
          .classList.add('nerp-map__incorrect-box_disabled')
      }

      activeSteps[counter].classList.add('steps-nav__el_finished')

      ++counter

      if (activeSteps[3].classList.contains('steps-nav__el_finished')) {
        popupFinished.classList.add('_opened')
      }
    }

    if (document.querySelector('.visor-switch').classList.contains('active')) {
      map.classList.add('detector')
    } else {
      map.classList.remove('detector')
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
}
