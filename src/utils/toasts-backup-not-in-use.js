// import { toast } from 'react-toastify'

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
