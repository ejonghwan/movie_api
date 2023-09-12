import { Movie } from '@/types';
import Image from 'next/image';
import { baseURL } from '@/url';

interface Props {
	title: string;
	movies: Movie[];
}

function Row({ title, movies }: Props) {
	title = title
		.split('_')
		.map((text) => text.charAt(0).toUpperCase() + text.slice(1))
		.join(' ');
	return (
		<article className='space-y-0.5 z-20 md:space-y-2 pl-4  md:pb-[30px] md:pl-12'>
			<h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>{title}</h2>

			{/* 부모요소에 group으로 지정하고 자식요소에서 group-hover라고 설정하면 hover타겟대상을 자식이 아닌 부모요소로 그룹화 가능 */}
			<div className='relative group'>
				<ul className='w-full flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-thin  scrollbar-track-[transparent] scrollbar-thumb-[transparent]   group-hover:scrollbar-thumb-red-600 '>
					{movies.map((movie, idx) => {
						return (
							//부모요소에 flex를 적용해서 자식요소를 좌우배치하면 flex넚이값 균등배치 우선적용되기 떄문에
							//자식요소의 넓이값을 고정px로 주고 싶을때에는 width가 아닌 min-width로 설정
							<li key={idx} className='min-w-[180px] h-[80px] relative'>
								<Image
									src={`${baseURL}w300${movie.backdrop_path}`}
									alt={`${movie.title || movie.name}`}
									fill
									quality={70}
									placeholder='blur'
									blurDataURL={`${baseURL}w300${movie.backdrop_path}`}
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover'
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</article>
	);
}

export default Row;
