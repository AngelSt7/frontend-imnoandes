'use client'

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

export const useErrorToast = () => {
    useEffect(() => {
        const error = Cookies.get('ERROR');
        if (error) {
            toast.error(error);
            Cookies.remove('ERROR');
        }
    }, []);
};
