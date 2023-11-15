export const list = {
  open: {
    x: 0,
    transition: {
      duration: 1.2,
      staggerChildren: 0.2
    }
  },
  closed: {
    x: '100%',
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
};

export const item = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween'
    }
  },
  closed: { opacity: 0.3, x: 300 }
};
