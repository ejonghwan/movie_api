import Head from 'next/head';
import Image from 'next/image';
import logo from '@/public/img/logo.svg';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
	email: string;
	password: string;
}

function Login() {

	const [Login, setLogin] = useState<boolean>(false);
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

	const join: SubmitHandler<Inputs> = async ({email, password}) => {
		console.log('e?', email, 'p?', password);
		if(Login) {
			console.log('login')
		} else {
			console.log('logout')
		}
	}

	return (
		<main className='relative flex w-full h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
			<Head>
				<title>Nextflix Member</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Image src='https://rb.gy/p2hphi' fill priority className='z-10 opacity-60 hidden md:inline object-cover' alt='login' />

			<Image
				width={150}
				height={150}
				src={logo}
				alt='logo'
				className='absolute left-4 top-4 cursor-pointer md:left-10 md:top-6 z-10'
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>

			<form onSubmit={handleSubmit(join)} className='relative z-50 mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
				<h1 className='text-4xl font-semibold'>Sign In</h1>

				<div className='space-y-4'>
					<input type='email' placeholder='Email' className='input' { ...register('email', { required: true }) } />
					{errors.email && <span>이메일이 올바르지 않습니다.</span>} 
					<input type='password' placeholder='Password' className='input' { ...register('password', { required: true, minLength: 6, maxLength: 16, pattern:/[a-zA-Z]+[1~9]+[!@#$%^&*()]+/ }) } />
					{errors.password && <span>6~16자 사이 숫자와 특수문자 포함시켜주세요.</span>} 
				</div>

				<button className='w-full rounded bg-[#e40914] py-3 font-semibold' onClick={() => setLogin(true)}>Sign In</button>

				<div className='text-[gray]'>
					New to Nextflix?
					<button className='text-white ml-4 hover:underline' onClick={() => setLogin(false)}>Sign up Now</button>
				</div>
			</form>
		</main>
	);
}

export default Login;
