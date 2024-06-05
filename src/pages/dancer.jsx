import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import IMG from '../assets/images/bex.jpeg';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const lastName = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const letter = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Dancer = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanScroll(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  return (
    <motion.div className='single'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 1.2 }}
              className='details'
            >
              <div className='location'>
              <span>59.334591</span>
                <span>18.063240</span>
              </div>
              <div className='mua'>Email: @Woolete</div>
            </motion.div>

            <motion.div className='model'>
              <motion.span
                className='first'
                variants={firstName}
                initial='initial'
                animate='animate'
              >
                <motion.span variants={letter}>W</motion.span>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>L</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>E</motion.span>
              </motion.span>
              <motion.span
                className='last'
                variants={lastName}
                initial='initial'
                animate='animate'
              >
                <motion.span variants={letter}>R</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>B</motion.span>
                <motion.span variants={letter}>K</motion.span>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>A</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: '-30%',
                  width: 524,
                  height: 650,
                }}
                animate={{
                  y: 0,
                  width: '100%',
                  height: window.innerWidth > 1440 ? 800 : 1000,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'
              >
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}
                >
                  <motion.img
                    src={IMG}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ease: 'easeInOut' },
                      y: window.innerWidth > 1440 ? -0 : -0,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              Through dance, I speak my truth <br /> & connect with my roots.
            </h2>
            <p>
              Woolete is a versatile and dynamic dancer with a unique
              expression. My focus is on Afro dance, dancehall, and hip hop.
              With multiple training courses and over 10 years of experience,
              I&apos;ve accomplished a lot. I&apos;ve worked with several
              artists, such as Mr Eazi, Antwan, Jasmin Kara, and Panetoz, and
              have performed on stages like Dramaten and Stadsteatern, both as a
              dancer and actor/extra. For me, dance is a journey and the
              ultimate exchange that transcends words. Dance is freedom.
              <br />
              <br />
              Through dance, I speak my truth, staying grounded and humble. Each
              movement reflects my journey, connecting me with my roots and
              lighting the path to my dreams.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dancer;
