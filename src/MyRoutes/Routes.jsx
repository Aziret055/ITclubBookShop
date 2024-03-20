import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'

const MyRoutes = () => {
	const data = [
		{
			link:"/" , element: <Home/> , key: 1
		}
	]
	return (
		<div>
			<Routes>
{
	data.map((el) => (
		<Route path={el.link} element={el.element} key={el.key}/>
	))
}
			</Routes>
			
		</div>
	);
};

export default MyRoutes;
