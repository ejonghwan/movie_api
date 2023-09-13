import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { auth } from '../firebase';


interface IAuth {
    user: User | null,
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    error: string | null;
    loading: boolean; 
}

const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async() => {},
    signIn: async() => {},
    logout: async() => {},
    error:  null,
    loading: false,
})

export const AuthProvider = ({ children }) => {
    const [Loading, setLoading] = useState<boolean>(false);
    const [User, setUser] = useState<User | null>(null);
    const [IntialLoading, setIntialLoading] = useState<boolean>(true)
    const router = useRouter();
    

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(true);
                router.push('/login');
            }
            setIntialLoading(false);//한번이라도 인증로직타면 false
        })
    }, [router])

    const signUp = async (email: string, password: string) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password).then(userInfo => {
            setUser(userInfo.user);
            router.push('/');
            setLoading(false);
        }).catch(err => alert(err.message)).finally(() => setLoading(false))
    }

    const signIn = async (email: string, password: string) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password).then(userInfo => {
            setUser(userInfo.user);
            router.push('/');
            setLoading(false);
        }).catch(err => alert(err.message)).finally(() => setLoading(false))
    }


    const logout = async () => {
        setLoading(true);
        await signOut(auth).then(() => {
            setUser(null);
            router.push('/');
            setLoading(false);
        }).catch(err => alert(err.message)).finally(() => setLoading(false))
    }

    return (
        <AuthContext.Provider value={{ user, singIn, signUp, loading, Loading, error }}>
            {!IntialLoading &&  children}
        </AuthContext.Provider>
    )


}

export default function useAuth() {
    return useContext(authContext)
}