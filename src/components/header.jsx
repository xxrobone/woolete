import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen((isOpen) => !isOpen);
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <motion.div
            className='logo'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <Link to='/'>By R-1</Link>
          </motion.div>
          <motion.div
            className='menu'
            onClick={handleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {isOpen ? 'Close' : 'Menu'}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
