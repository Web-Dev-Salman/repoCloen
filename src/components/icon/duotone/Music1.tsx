import React, { SVGProps } from 'react';

const SvgMusic1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8 17.04V8a1 1 0 01.702-.954l9-2.5A1 1 0 0119 5.5V17c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2c.171 0 .338.014.5.04V8l-7 1.875V19c0 1.105-1.12 2-2.5 2S5 20.105 5 19s1.12-2 2.5-2c.171 0 .338.014.5.04z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMusic1;
