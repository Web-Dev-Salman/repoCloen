import React, { SVGProps } from 'react';

const SvgSunFog = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path d='M8 14a4 4 0 118 0H8z' fill='currentColor' />
				<path
					d='M19.5 11H21a1.5 1.5 0 010 3h-1.5a1.5 1.5 0 010-3zm-3.44-4.129l1.061-1.06a1.5 1.5 0 012.122 2.121l-1.061 1.06a1.5 1.5 0 11-2.121-2.12zM3 11h1.5a1.5 1.5 0 010 3H3a1.5 1.5 0 010-3zm9-8.5A1.5 1.5 0 0113.5 4v1.5a1.5 1.5 0 01-3 0V4A1.5 1.5 0 0112 2.5zM4.81 5.81a1.5 1.5 0 012.122 0l1.06 1.061a1.5 1.5 0 01-2.12 2.122L4.81 7.932a1.5 1.5 0 010-2.121zM2.5 16h19a.5.5 0 110 1h-19a.5.5 0 110-1zm0 2h5a.5.5 0 110 1h-5a.5.5 0 110-1zm12 2h7a.5.5 0 110 1h-7a.5.5 0 110-1zm-5-2h12a.5.5 0 110 1h-12a.5.5 0 110-1zm-7 2h10a.5.5 0 110 1h-10a.5.5 0 110-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgSunFog;
