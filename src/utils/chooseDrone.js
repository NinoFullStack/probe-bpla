import { inject } from 'vue'

export default () => {
  const translate = inject('translate')

  const popup = document.querySelector('.popup')
  const finishPopup = document.querySelector('.popup-finished')

  document.addEventListener('click', e => {
    if (e.target.classList.contains('drone-card__button')) {
      if (e.target.hasAttribute('data-correct')) {
        popup.classList.remove('_opened')
        popup.classList.remove('clickable')

        document.querySelectorAll('.drone-card__button').forEach(el => {
          el.setAttribute('disabled', true)
        })
        e.target.removeAttribute('disabled')
        e.target.classList.add('drone-card__button_checked')
        e.target.textContent = translate('Выбран')

        finishPopup.classList.add('_opened')
      } else if (e.target.hasAttribute('data-wrong')) {
        callPopup(popup)
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
      popup.classList.remove('_opened')
      popup.classList.remove('clickable')
    }
    if (e.target.closest('.popup__close-btn')) {
      popup.classList.remove('_opened')
      popup.classList.remove('clickable')
    }
  })
  // for popup
  document.addEventListener('keydown', function (event) {
    if (popup.classList.contains('_opened')) {
      if (event.key == 'Escape') {
        popup.classList.remove('_opened')
        popup.classList.remove('clickable')
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
}
