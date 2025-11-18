import toast from 'react-hot-toast';

export const infoAlert = (text: string) => {
  toast.error(text, {
    duration: 4000,
    position: 'top-right',
  });
};

export const successAlert = (text: string) => {
  toast.success(text, {
    duration: 4000,
    position: 'top-right',
  });
};

