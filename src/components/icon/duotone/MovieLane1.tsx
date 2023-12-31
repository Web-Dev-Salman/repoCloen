import React, { SVGProps } from 'react';

const SvgMovieLane1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 21a9 9 0 110-18 9 9 0 010 18zm-.225-7.707a1 1 0 100-2 1 1 0 000 2zm-.551-4.19a2 2 0 10-1.036-3.864 2 2 0 001.036 3.863zm2.588 9.658a2 2 0 10-1.036-3.863 2 2 0 001.036 3.863zm-6.124-3.535a2 2 0 10-1.035-3.864 2 2 0 001.035 3.864zm9.66-2.588a2 2 0 10-1.036-3.864 2 2 0 001.035 3.864z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M17.657 19H21a1 1 0 010 2h-9c2.143 0 4.112-.75 5.657-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMovieLane1;
