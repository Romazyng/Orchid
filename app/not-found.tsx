'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Marcellus } from 'next/font/google';

const marcellus = Marcellus({ weight: '400', subsets: ['latin'] });

export default function NotFound() {
  const goBack = () => {
    if (window.history.length > 2) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className={`text-6xl md:text-8xl font-bold mb-4 ${marcellus.className}`}>
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>

        <Button
          variant="outline"
          size="lg"
          className="px-6"
          onClick={goBack}
        >
          Go Back
        </Button>
      </motion.div>
    </main>
  );
}