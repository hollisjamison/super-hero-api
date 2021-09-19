import React from 'react'
import Superheroes from './components/superheroes/superheroes'
import Error from './components/error/error'
import HeroInfo from './components/heroinfo/heroinfo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/heroes/:heroSlug" component={HeroInfo} />
				<Route path="/" component={Superheroes} />
				<Route path="*" component={Error} />
			</Switch>
		</BrowserRouter>

	)
}

export default App
