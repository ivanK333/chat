import { Main } from './pages'

const router = async () => {

  const content = await document.getElementById('root');

  const MainPages = new Main();


  content.innerHTML = new Main().render();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);