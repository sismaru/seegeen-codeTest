import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

const listLayout = css`
	a {
		> div {
			padding-right: 50px;
			color: var(--dark);
			align-items: flex-start;
			flex-direction: column;
		}
		&.active {
			> div {
				background: var(--dark);
				color: var(--white);
				.css-cveggr-MuiListItemIcon-root {
					color: var(--white);
				}
			}
		}
	}
	~ li {
		border-top: 1px solid var(--grayD);
	}
`;
const iconStyle = css`
	position: absolute;
	top: 50%;
	right: 20px;
	margin-top: -12px;
	min-width: auto;
`;
const secondaryText = css`
	font-size: 0.7em;
`;
const productItem = ({ article }) => {
	const { prodLine, productName } = article;
	return (
		<li css={listLayout}>
			<NavLink to={`/view/${article.seq}`}>
				<ListItem button>
					<ListItemText
						secondary={
							<Typography
								type="body2"
								style={{
									fontSize: '.6em',
									marginBottom: -8,
									fontWeight: 'bold',
									color: '#aaa',
								}}
							>
								{prodLine}
							</Typography>
						}
						css={secondaryText}
					/>
					<ListItemText primary={productName} />
					<ListItemIcon>
						<ChevronRightSharpIcon css={iconStyle} />
					</ListItemIcon>
				</ListItem>
			</NavLink>
		</li>
	);
};

export default productItem;
