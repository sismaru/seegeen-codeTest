import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setData } from '../reducer';
import Grid from '@mui/material/Grid';
import ProductList from '../pages/List';
import { css } from '@emotion/react';
import View from '../pages/View';

/** @jsxImportSource @emotion/react */
const gridStyle = css`
	border-right: 1px solid #eee;
	overflow: hidden;
`;
const gridViewStyle = css`
	color: var(--dark);
	padding: 48px;
`;
const scrollY = css`
	width: calc(100% + 20px);
	height: 100vh;
	overflow-y: auto;
`;

export default function RootLayout() {
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get('/code-test/202212', {
					headers: {
						'Content-Type': 'application/json',
					},
				});

				dispatch(setData(data));
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, [dispatch]);

	return (
		<div className="root-layout">
			<Grid container spacing={2}>
				<Grid item xs={4} md={3} css={gridStyle}>
					<nav css={scrollY}>
						<ProductList />
					</nav>
				</Grid>
				<Grid item xs={8} md={9}>
					<main css={gridViewStyle}>
						<View path={location.pathname} />
					</main>
				</Grid>
			</Grid>
		</div>
	);
}
