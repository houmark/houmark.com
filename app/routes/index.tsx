import { motion } from 'framer-motion';
export default function Index() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-white min-h-screen-ios h-screen-ios">
      <div>
        <motion.h1
          className="main-headline m-4 text-black will-change-transform sm:m-0"
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          houmark.com
        </motion.h1>
        <motion.div
          initial={{ filter: 'blur(40px)', y: '100vh' }}
          animate={{ filter: 'blur(0px)', y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="group m-4 mt-2 rounded-2xl bg-black/75 to-red-700 p-6 text-center text-3xl ring-4 ring-white transition-[box-shadow,background-color] duration-300 will-change-transform hover:bg-black hover:ring-8 sm:m-0"
        >
          <p>New site underway!</p>
          <p className="mt-4 transition-colors delay-300 duration-1000 group-hover:text-green-500">
            →{' '}
            <a
              href="mailto:info@houmark.com"
              className="bg-gradient-to-r from-white to-white bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out hover:bg-[length:100%_3px]"
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
