import Handlebars from 'handlebars/dist/cjs/handlebars';
import javascriptLogo from '../../../static/img/javascript.svg'
import viteLogo from '../../../static/img/vite.svg'
import { template } from '.';
import styles from './styles.module.css';

export class Main {
  constructor() {
    this.props = {
      viteLogo,
      classNameLogo: styles.logo,
      javascriptLogo,
      classNameLogoVanilla: `${styles.logo} ${styles.vanilla}`,
      classNameCard: styles.card,
      classNameText: styles.text,
      text: 'Test',
    }
  }

  render() {
    return Handlebars.compile(template)(this.props);
  }
}


