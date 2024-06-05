import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Components
import ScrollForMore from '../components/scrollForMore';
import IMG from '../assets/images/becca.png';

const firstName = {
  initial: {
    y: 200, // Initial position off-screen
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
    y: 200, // Initial position off-screen
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
    y: 200, // Initial position off-screen
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Model = () => {
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
    <motion.div className='single' initial='initial' animate='animate'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2 },
              }}
              className='details'
            >
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='mua'>MUA: @mylifeascrystall</div>
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
                  y: 0,
                  width: 650,
                  height: 520,
                }}
                animate={{
                  y: '-50vh',
                  width: '100%',
                  height: window.innerWidth > 980 ? 800 : 800,
                  transition: { delay: 0.2 },
                }}
                className='thumbnail-single'
              >
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={IMG}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2 },
                      y: window.innerWidth > 980 ? -0 : 0,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of &ldquo;de Finibus Bonorum et
              Malorum&ldquo;(The Extremes of Good and Evil) by Cicero, written
              in 45 BC. This book is a treatise on the theory of ethics, very
              popular during the Renaissance. The first line of Lorem Ipsum,
              &ldquo;Lorem ipsum dolor sit amet..&ldquo;, comes from a line in
              section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
