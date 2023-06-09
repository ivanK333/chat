import { SignUp, SignIn, Profile, ChangePassword } from './pages'
import { routes } from './appConstants'

const getPage = () => {
  switch (window.location.pathname) {
    case routes.signIn:
      return new SignIn().render();
    case routes.signUp:
      return new SignUp().render();
    case routes.profile:
      return new Profile().render();
    case routes.changePassword:
      return new ChangePassword().render();

    default:
      return window.location.replace(routes.signIn)
  }
}
const router = async () => {
  const content = await document.getElementById('root');

  content.innerHTML = getPage();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);