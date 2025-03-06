import { useEffect, useState } from 'react'

// 🔹 How It Works:
// Uses navigator.wakeLock.request("screen") to keep the screen on.
// Listens for the release event to reset state if the lock is lost.
// Cleans up (release()) when the component unmounts.
// ⚠️ Notes:
// Works only on secure contexts (https://).
// May not work on all browsers (mainly supported in Chrome & Edge).
// The lock may be lost if the device goes to a locked state.
export default function useStayAwake() {
  const [wakeLock, setWakeLock] = useState(null)

  useEffect(() => {
    let lock = null

    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          lock = await navigator.wakeLock.request('screen')
          setWakeLock(lock)

          // Release wake lock if it gets disconnected
          lock.addEventListener('release', () => {
            console.log('Wake lock released')
            setWakeLock(null)
          })
        }
      } catch (err) {
        console.error('Failed to obtain wake lock:', err)
      }
    }

    requestWakeLock()

    // Clean up on component unmount
    return () => {
      if (lock) lock.release()
    }
  }, [])

  return wakeLock
}
