import React, { SVGProps } from 'react';

const SvgH2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					fill='currentColor'
					d='M1.634 19V5.51h1.729v5.757h7.448V5.51h1.729V19h-1.729v-6.061H3.363V19z'
				/>
				<path
					d='M14.649 19l5.225-5.681a3.498 3.498 0 01-.627.057c-2.299-.057-3.914-1.824-3.914-3.971 0-2.28 1.786-4.047 4.085-4.047s4.104 1.767 4.104 4.047c0 1.596-.703 2.85-2.337 4.617l-3.116 3.458h5.453V19h-8.873zm4.769-7.049c1.444 0 2.489-1.083 2.489-2.546 0-1.444-1.045-2.546-2.489-2.546-1.463 0-2.47 1.102-2.47 2.546 0 1.463 1.007 2.546 2.47 2.546z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgH2;
