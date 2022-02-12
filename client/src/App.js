import React from 'react'
import Superheroes from './components/superheroes/superheroes'
import Error from './components/error/error'
import HeroInfo from './components/heroinfo/heroinfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/heroes/:heroSlug" element={<HeroInfo/>} />
				<Route path="/" element={<Superheroes/>} />
				<Route path="*" element={<Error/>} />
			</Routes>
		</BrowserRouter>

	)
}

export default App
