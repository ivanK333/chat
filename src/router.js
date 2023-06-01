import { Main } from './pages'

const router = async () => {

  const content = await document.getElementById('root');


  content.innerHTML = Main;
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);