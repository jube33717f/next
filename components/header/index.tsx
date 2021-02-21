import { container, title } from './styles'
import Logo from '@components/logo'
const Header =()=> (<header css={container}>
            <Logo />
            <h1 css={title}>
             next.js
            </h1>
        </header>)
export default Header;