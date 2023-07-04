import Logo from '@/assets/Logo.png'
import style from './StartPage.module.scss'
import { Link } from 'react-router-dom'

export const StartPage = () => {
	return (
		<main>
			<div>
				<div>
					<img src={Logo} alt='Logo' />
					<div>
						<h1>Openland</h1>
						<p>Modern social network built for you, not advertisers</p>
					</div>
				</div>
				<div>
					<Link to='/'></Link>
				</div>
			</div>
		</main>
	)
}
