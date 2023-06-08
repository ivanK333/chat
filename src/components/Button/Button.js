import template from './Button.hbs';
import styles from './styles.module.pcss';

export class Button {
  constructor(props) {
    this.props = props;
  }
  render() {
    const {
      view = 'default',
      type = 'button',
      className = '',
      ...props
    } = this.props;

    const compiledTemplate = template({
      ...props,
      className: `${styles.button} ${styles[view]} ${className}`,
    });

    return compiledTemplate;
  }
}