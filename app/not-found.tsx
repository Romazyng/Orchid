// app/not-found.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { Icons } from '@/components/ui/icons'; // замените на свой путь

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4">
      {/* Animated 404 */}
      <div className="flex space-x-1 overflow-hidden">
        {['4', '0', '4'].map((digit, index) => (
          <motion.span
            key={index}
            className="text-[120px] md:text-[200px] font-bold leading-none"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
          >
            {digit}
          </motion.span>
        ))}
      </div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 text-center max-w-md text-gray-400"
      >
        Oops! Looks like this page doesn't exist.
      </motion.p>

      {/* Back Button under the text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-8"
      >
        <Link href="/">
          <Button variant="outline" className="text-black border-gray-600 hover:bg-gray-900 hover:text-white">
            Back to work
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}

