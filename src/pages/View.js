import React from 'react';
import { useSelector } from 'react-redux';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

const titleStyle = css`
	margin-bottom: 24px;
	padding-bottom: 24px;
	border-bottom: 1px solid var(--grayD);
`;
const textBlock = css`
	margin-top: 24px;
	strong {
		display: block;
		font-size: 1.2em;
		padding-bottom: 6px;
	}
`;

const View = ({ path }) => {
	const pageNum = path.split('/').pop();
	const details = useSelector((state) => state.data?.find((v) => v.seq === pageNum))?.detail;

	return (
		details && (
			<>
				<Typography variant="h4" component="h2" mb={3} css={titleStyle}>
					{details.productName}
				</Typography>

				<div css={textBlock}>
					<strong>SubTitle</strong>
					<div dangerouslySetInnerHTML={{ __html: details.subTitle }} />
				</div>

				<div css={textBlock}>
					<strong>OutLine</strong>
					<em dangerouslySetInnerHTML={{ __html: details.outLine }} />
				</div>
			</>
		)
	);
};

export default View;
