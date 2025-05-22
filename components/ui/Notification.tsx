'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NotificationProps {
  show: boolean
  onClose?: () => void // Опциональный callback
}

export default function Notification({ show, onClose }: NotificationProps) {
  const [visible, setVisible] = useState(show)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
        if (onClose) onClose()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  const handleClose = () => {
    setVisible(false)
    if (onClose) onClose()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-16 left-[54.5%] transform -translate-x-1/2 bg-blue-100 text-blue-900 px-6 py-3 rounded-md shadow-lg z-50 flex items-center gap-4"
        >
          <span>Чтобы начать, введите ключевое слово и нажмите пробел</span>
          <button
            onClick={handleClose}
            className="text-blue-700 hover:text-blue-900 font-bold focus:outline-none"
            aria-label="Закрыть уведомление"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}