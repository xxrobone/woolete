import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import IMG from '../assets/images/bex.jpeg';
/*
import ImageReveal from "../components/image-reveal/ImageReveal"; */



const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='container'>
        <div className='row center'>
         
          <div className='image-container'>
            <p>Click me!</p>
            <div
              className='thumbnail'
              style={{
                width: window.innerWidth > 524 ? 524 : '100svw' ,
                height: 650,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                className='frame'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '100%' }}
                transition={{ duration: 1}}
                exit={{opacity: 0}}
              >
                <Link to={`/dancer/woolete`}>
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
                      objectPosition: 'top center',
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
                      objectPosition: 'center 10%',
                      opacity: 1,
                      transition: 'opacity 0.5s',
                    }}
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
                <span>59.334591</span>
                <span>18.063240</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
