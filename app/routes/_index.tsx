import type { LoaderFunctionArgs } from '@remix-run/node';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Index() {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div
      className={`flex h-dvh w-full flex-col items-center justify-center ${
        isAnimating ? 'overflow-hidden' : 'overflow-auto'
      }`}
    >
      <div className="w-11/12 will-change-transform sm:w-10/12">
        <motion.h1
          className="main-headline inline font-bold text-black will-change-transform sm:m-0"
          /* Make LightHouse happy by having 0.01 in opacity*/
          initial={{ opacity: 0.0001, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 1.3 }}
        >
          houmark.com
        </motion.h1>
        <motion.div
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className="group mt-2 text-xl text-black will-change-transform sm:text-2xl lg:text-3xl"
          initial={{ y: '60vh' }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 70 }}
        >
          <p className="text-balance font-bold">
            Let's build your next platform, app or website, together!
          </p>
          <p className="mt-4 transition-colors delay-300 duration-1000">
            →{' '}
            <a
              className="bg-gradient-to-r from-white to-white bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out hover:bg-[length:100%_3px]"
              href="mailto:info@houmark.com"
            >
              Get in touch
            </a>
            !
          </p>
        </motion.div>
      </div>
    </div>
  );
}
