import React, { SVGProps } from 'react';

const SvgNightRain = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17.228 2.205a5 5 0 006.69 5.465 5 5 0 11-6.69-5.465zM6.5 22A1.5 1.5 0 015 20.5c0-.552.5-1.386 1.5-2.5 1 1.114 1.5 1.948 1.5 2.5A1.5 1.5 0 016.5 22zm5 0a1.5 1.5 0 01-1.5-1.5c0-.552.5-1.386 1.5-2.5 1 1.114 1.5 1.948 1.5 2.5a1.5 1.5 0 01-1.5 1.5zm5 0a1.5 1.5 0 01-1.5-1.5c0-.552.5-1.386 1.5-2.5 1 1.114 1.5 1.948 1.5 2.5a1.5 1.5 0 01-1.5 1.5z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M5.747 16.043A6 6 0 1114.811 9.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgNightRain;
