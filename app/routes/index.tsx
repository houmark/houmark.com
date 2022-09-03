import { motion } from 'framer-motion';

export default function Index() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black/60 text-white min-h-screen-ios h-screen-ios">
      <div>
        <motion.h1
          initial={{ filter: 'blur(20px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ delay: 0.5 }}
          className="main-headline m-4 sm:m-0"
        >
          houmark.com
        </motion.h1>
        <motion.div
          initial={{ filter: 'blur(20px)', y: -130 }}
          animate={{ filter: 'blur(0px)', y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="m-4 mt-2 rounded-2xl bg-black/40 p-6 text-center text-3xl sm:m-0"
        >
          <p>New site underway!</p>
          <p className="mt-4">
            <a
              href="mailto:info@houmark.com"
              className="group transition-[background] duration-300 ease-in-out"
            >
              →{' '}
              <span className="bg-gradient-to-r from-white to-white bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-[background] duration-500 ease-out group-hover:bg-[length:100%_3px]">
                Get in touch
              </span>
            </a>
            !
          </p>
        </motion.div>
      </div>
    </div>
  );
}
