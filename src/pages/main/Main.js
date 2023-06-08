import viteLogo from '../../../static/img/vite.svg'
import template from './Main.hbs';
import styles from './styles.module.pcss';
import { Input, Button } from "../../components";

export class Main {
  constructor() {
    this.props = {
      login: new Input({
        type: 'text',
        name: 'login',
        placeholder: 'Логин',
      }).render(),
      signIn: new Button({
        view: 'default',
        text: 'Sign in',
        placeholder: 'Логин',
      }).render(),
      cancel: new Button({
        view: 'ghost',
        text: 'Cancel',
        placeholder: 'Логин',
      }).render(),
    }
  }

  render() {
    return template({...this.props});
  }
}


