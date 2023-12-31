import React, { SVGProps } from 'react';

const SvgForward1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13 10V5.67a.75.75 0 011.248-.56l7.158 6.362a.75.75 0 01.032 1.09L14.28 19.72a.75.75 0 01-1.28-.53V15c-1.347-.081-4.178-.084-8.491-.01A.5.5 0 014 14.492v-3.986a.5.5 0 01.505-.5c5.13.05 7.962.048 8.495-.005z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgForward1;
