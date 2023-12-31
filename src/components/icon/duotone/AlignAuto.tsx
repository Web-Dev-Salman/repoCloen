import React, { SVGProps } from 'react';

const SvgAlignAuto = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M9.618 5l-.883 2H3a1 1 0 110-2h6.618zm4.764 0H21a1 1 0 010 2h-5.735l-.883-2zm-8.294 8l-.882 2H3a1 1 0 010-2h3.088zm11.824 0H21a1 1 0 010 2h-2.206l-.882-2zM7.852 9l-.881 2H3a1 1 0 010-2h4.853zm8.295 0H21a1 1 0 010 2h-3.97l-.883-2zM4.324 17l-.883 2H3a1 1 0 010-2h1.324zm15.352 0H21a1 1 0 010 2h-.441l-.883-2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M11.044 5.256h1.962L18.5 19H16l-1.284-3.916H9.19L7.5 19H5l6.044-13.744zm2.88 7.884l-1.962-5.184-1.998 5.184h3.96z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAlignAuto;
