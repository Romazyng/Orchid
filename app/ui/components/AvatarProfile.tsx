'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SignOutButton } from './sign-out-button';

interface AvatarWithSignOutProps {
  src: string;
  alt: string;
}

export default function AvatarWithSignOut({ src, alt }: AvatarWithSignOutProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={container}>
            <AnimatePresence initial={false}>
              {isVisible ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  style={box}  // можно настроить стили или убрать, если не нужны
                  key="signout"
                >
                  <SignOutButton />
                </motion.div>
              ) : null}
            </AnimatePresence>
            <motion.button
                style={button}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                <Image
                src={src}
                alt={alt}
                width={50}
                height={50}
                className="rounded-full shadow-lg"
              />
            </motion.button>
        </div>
  );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: 100,
  height: 100,
  position: "relative",
  top: 0,
}

const box: React.CSSProperties = {
  width: 100,
  height: 100,
  borderRadius: "10px",
}

const button: React.CSSProperties = {
  padding: "15px 20px",
  position: "absolute",
  bottom: 0,
  left: 5,
  right: 0,
}