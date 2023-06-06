import javascriptLogo from '../../../static/img/javascript.svg'
import viteLogo from '../../../static/img/vite.svg'
import template from './Main.hbs';
import styles from './styles.module.pcss';

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
    return template({...this.props});
  }
}


