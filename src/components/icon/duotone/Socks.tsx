import React, { SVGProps } from 'react';

const SvgSocks = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.084 15.443l-3.792 1.38a2.779 2.779 0 11-1.9-5.222l3.94-1.434.854-4.849a.75.75 0 01.87-.608l3.564.629a.75.75 0 01.609.868l-1.444 8.19a1.5 1.5 0 01-1.738 1.216l-.963-.17z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M14.47 18.689l-5.106 1.858a3.799 3.799 0 01-2.599-7.14l5.178-1.884 1.108-6.285a1 1 0 011.159-.81l4.924.867a1 1 0 01.81 1.159l-1.91 10.833a2 2 0 01-2.316 1.622l-1.249-.22z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSocks;
