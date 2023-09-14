import { atom } from 'recoil';
import { Movie } from '@/types';


export const modalState = atom<boolean>({
    key: 'modalState',
    default: false,
})

export const movieState = atom<Movie | null>({
    key: 'movieState',
    default: null,
})