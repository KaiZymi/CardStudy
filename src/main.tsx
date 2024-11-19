import {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {LazyMotion, domAnimation } from "framer-motion";



createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<LazyMotion features={domAnimation}>
			<App/>
		</LazyMotion>
	</BrowserRouter>

)
