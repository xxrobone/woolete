import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import IMG from '../assets/images/bexface.png';
/*
import ImageReveal from "../components/image-reveal/ImageReveal"; */

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

const Home = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageLoaded = () => {
    setTimeout(() => {
      setImageLoaded(true); // Set imageLoaded to true after 2 seconds
    }, 2000);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='container'>
        <div className='row center'>
          {/* <motion.div className='model'>
            <motion.span className='first' variants={firstName} initial="initial" animate='animate'>
              <motion.span variants={letter}>W</motion.span>
              <motion.span variants={letter}>O</motion.span>
              <motion.span variants={letter}>O</motion.span>
              <motion.span variants={letter}>L</motion.span>
              <motion.span variants={letter}>E</motion.span>
              <motion.span variants={letter}>T</motion.span>
              <motion.span variants={letter}>E</motion.span>
            </motion.span>
            <motion.span className='last' variants={lastName} initial="initial" animate='animate'>
              <motion.span variants={letter}>R</motion.span>
              <motion.span variants={letter}>E</motion.span>
              <motion.span variants={letter}>B</motion.span>
              <motion.span variants={letter}>K</motion.span>
              <motion.span variants={letter}>H</motion.span>
              <motion.span variants={letter}>A</motion.span>
            </motion.span>
          </motion.div> */}
          <div className='image-container'>
            <p>Click me!</p>
            <div
              className='thumbnail'
              style={{
                width: 780,
                height: 380,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                className='frame'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Link to={`/model/woolete`}>
                  <img
                    src={IMG}
                    alt='Placeholder'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0,
                      transition: 'opacity 0.5s',
                    }}
                  />
                  <img
                    src={IMG}
                    alt='Woolete'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '60%',
                      objectFit: 'cover',
                      objectPosition: 'center 40%',
                      opacity: 1,
                      transition: 'opacity 0.5s',
                    }}
                    onLoad={handleImageLoaded}
                  />
                </Link>
              </motion.div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className='information'
            >
              <motion.div
                className='title'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Woolete Rebkha
              </motion.div>
              <motion.div
                className='location'
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span>28.538336</span>
                <span>-81.379234</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
