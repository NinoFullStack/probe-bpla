import { inject } from 'vue'

export default () => {
  const translate = inject('translate')

  const popup = document.querySelector('.popup')
  const popupFinished = document.querySelector('.popup-complete')
  const answears = document.querySelectorAll('.answear__text')
  let counter = 0
  const count = 6
  const completeBtn = document.querySelector(
    '.security-center__answear-complete'
  )

  document.addEventListener('click', e => {
    if (e.target.classList.contains('security-center__answears-button')) {
      document
        .querySelectorAll('.security-center__answears-button_wrong')
        .forEach(el => {
          el.classList.remove('security-center__answears-button_wrong')
        })

      if (
        !e.target.classList.contains('security-center__answears-button_checked')
      ) {
        if (counter < count) {
          e.target.classList.add('security-center__answears-button_checked')
          counter++
        }
      } else {
        e.target.classList.remove('security-center__answears-button_checked')
        counter--
      }
    }

    if (e.target.classList.contains('security-center__answear-complete')) {
      document
        .querySelectorAll('.security-center__answears-button_checked')
        .forEach(el => {
          if (el.hasAttribute('data-correct')) {
            el.classList.add('security-center__answears-button_correct')
            el.classList.remove('security-center__answears-button_checked')
          } else {
            el.classList.add('security-center__answears-button_wrong')
            el.classList.remove('security-center__answears-button_checked')
            counter = document.querySelectorAll(
              '.security-center__answears-button_correct'
            ).length
            callPopup(popup)
          }
        })

      for (
        let i = 0;
        i <
        document.querySelectorAll('.security-center__answears-button_correct')
          .length;
        i++
      ) {
        const el = document.querySelectorAll(
          '.security-center__answears-button_correct'
        )[i]

        answears[i].textContent = el.querySelector(
          '.security-center__answears-text'
        ).textContent
      }
      counter = document.querySelectorAll(
        '.security-center__answears-button_correct'
      ).length
    }

    if (counter >= count) {
      document
        .querySelectorAll('.security-center__answears-button')
        .forEach(el => {
          if (
            !el.classList.contains('security-center__answears-button_checked')
          ) {
            el.style.pointerEvents = 'none'
          }
        })

      completeBtn.classList.remove('security-center__answear-complete_disabled')
    } else {
      document
        .querySelectorAll('.security-center__answears-button')
        .forEach(el => {
          if (
            !el.classList.contains('security-center__answears-button_correct')
          ) {
            el.style.pointerEvents = 'all'
          }
        })

      completeBtn.classList.add('security-center__answear-complete_disabled')
    }

    if (
      document.querySelectorAll('.security-center__answears-button_correct')
        .length === count
    ) {
      document
        .querySelectorAll('.security-center__answears-button_wrong')
        .forEach(el => {
          el.classList.remove('security-center__answears-button_wrong')
        })
      completeBtn.classList.add('security-center__answear-complete_disabled')
      completeBtn.textContent = translate('Готово')
      completeBtn.style.backgroundColor = '#E1E7EB'
      completeBtn.style.border = '1px solid #E1E7EB'
      completeBtn.style.color = '#080809'

      window.setTimeout(() => {
        popupFinished.classList.add('_opened')
      }, 2000)
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
  document.addEventListener('keydown', event => {
    if (popup.classList.contains('_opened') && event.key === 'Escape') {
      closePopup(popup)
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
