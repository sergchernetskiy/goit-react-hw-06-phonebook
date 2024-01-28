import toast from 'react-hot-toast';

const params = {
  position: 'top-right',
  duration: 4000,
  icon: '👀',
  style: {
    borderRadius: '20px',
    background: '#ada790',
    color: '#fff',
  },
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
};

export const notifyWarn = message => toast(`${message}`, params);
