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

/**
 * Format numbers using the native Intl.NumberFormat object
 *
 * Note: Intl.NumberFormat() can be called with or without new. Both create a new Intl.NumberFormat instance.
 * However, there's a special behavior when it's called without new and the this value is another Intl.NumberFormat instance;
 * see Return value: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#return_value
 *
 * Use Chrome DevTools > Sensors > Location to change the locale
 *
 * @param {string} locale - A string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. The runtime's default locale is used when undefined is passed or when none of the specified locale identifiers is supported.
 * @param {object} [options={}] - An object. For ease of reading, the property list is broken into sections based on their purposes, including locale options, style options, digit options, and other options.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
 *
 * @return {object} - A new Intl.NumberFormat object.
 */
export function formatNumber(locale = undefined, options = {}) {
  return new Intl.NumberFormat(locale, options)
}

export const SECOND_IN_MILLISECONDS = 1000

export const MINUTE_IN_MILLISECONDS = 60 * SECOND_IN_MILLISECONDS
export const HOUR_IN_MILLISECONDS = 60 * MINUTE_IN_MILLISECONDS
export const DAY_IN_MILLISECONDS = 24 * HOUR_IN_MILLISECONDS
export const WEEK_IN_MILLISECONDS = 7 * DAY_IN_MILLISECONDS
