import { toast } from 'react-toastify'

/**
 * Pauses execution for a specified amount of time.
 *
 * @param {number} [ms=1000] - The number of milliseconds to wait before resolving.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 *
 * @example
 * // Pause execution for 2 seconds
 * await sleep(2000);
 */
export async function sleep(ms = 1000) {
  await new Promise(r => setTimeout(r, ms))
}

/**
 * Display a generic but customizable toast
 *
 * @author Ashkan Ahmadi
 * @param {string} [text=OK] - The text to display
 * @param {object} [options={}] - An object with all the options to customize the behavior and look
 * @example showToast('Success')
 * @example showToast('Success', { position: 'top-left' })
 * @link https://fkhadra.github.io/react-toastify/category/guides
 *
 */
export function showToast(text = 'OK', options = {}) {
  const defaultConfigs = {
    position: 'top-right',
  }

  const opts = { ...defaultConfigs, ...options }

  toast(text, opts)
}

export function showErrorToast(text = 'Error', options = {}) {
  showToast(text, {
    type: 'error',
    ...options,
  })
}

export function showSuccessToast(text = 'Success', options = {}) {
  showToast(text, {
    type: 'success',
    ...options,
  })
}

export function showInfoToast(text = 'Info', options = {}) {
  showToast(text, {
    type: 'info',
    ...options,
  })
}

export function showWarningToast(text = 'Warning', options = {}) {
  showToast(text, {
    type: 'warning',
    ...options,
  })
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
