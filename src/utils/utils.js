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
