import template from './ChatPreview.hbs';
import styles from './styles.module.pcss';

export class ChatPreview {
  constructor(props) {
    this.props = props;
  }
  render() {
    const {
      className = '',
      ...props
    } = this.props;

    const compiledTemplate = template({
      ...props,
      className: `${styles.container} ${className}`,
    });

    return compiledTemplate;
  }
}