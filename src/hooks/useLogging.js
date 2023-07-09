import { inject } from 'vue'

const removeItemStorage = name => localStorage.removeItem(name)
const getStorage = name => localStorage.getItem(name)

export const useLogging = (bpla_block = +getStorage('bpla_block')) => {
  const log = inject('log')

  if (bpla_block) {
    localStorage.setItem('bpla_block', bpla_block)
  }

  const activity = e => {
    e.preventDefault()
    const { btn_id_activity } = e.target.dataset
    log({
      type: 'ACTIVITY',
      action: 'user_action',
      bpla_block,
      btn_id_activity,
    })
  }

  const start = e => {
    e.preventDefault()
    const session = getStorage('session')
    const { btn_next_id } = e.target.dataset

    const createSession = () => {
      localStorage.setItem('session', btoa(new Date().toISOString()))
    }

    if (!session) {
      createSession()
      log({ type: 'SYSTEM', action: 'session_created', bpla_block })
    }

    if (getStorage('end') && session) {
      log({ type: 'SYSTEM', action: 'session_restarted', bpla_block })
    }

    log({ type: 'SYSTEM', action: 'session_started', bpla_block, btn_next_id })
    removeItemStorage('end')
    removeItemStorage('error')
  }

  const end = e => {
    e.preventDefault()
    const { btn_end_id } = e.target.dataset
    log({ type: 'SYSTEM', action: 'session_finished', bpla_block, btn_end_id })
    localStorage.setItem('end', true)
  }

  const cancel = () => {
    const session = getStorage('session')

    if (session) {
      log({ type: 'ROI', action: 'user_canceled_probe', bpla_block })
    }
  }

  const nextBlock = e => {
    e.preventDefault()
    const { btn_next_id } = e.target.dataset
    const error = getStorage('error')

    if (error) {
      log({ type: 'ROI', action: 'user_mistake', bpla_block })
    } else {
      log({ type: 'ROI', action: 'user_without_mistake', bpla_block })
    }

    log({
      type: 'ACTIVITY',
      action: 'user_finished_block',
      bpla_block,
      btn_next_id,
    })

    removeItemStorage('error')
  }

  const restored = () => {
    const session = getStorage('session')

    if (session) {
      log({ type: 'SYSTEM', action: 'session_restored', bpla_block })
    }
  }

  return { activity, start, nextBlock, end, cancel, restored }
}
