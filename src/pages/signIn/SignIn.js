import template from './SignIn.hbs';
import styles from './styles.module.pcss';
import {
  Input,
  Button,
  Link,
  Card,
} from "../../components";
import { routes } from "../../appConstants";

export class SignIn {
  constructor() {
    this.content = {
      login: new Input({
        type: 'text',
        name: 'login',
        placeholder: 'Login',
        className: styles.login,
      }).render(),
      password: new Input({
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        className: styles.password,
      }).render(),
      signIn: new Button({
        type: 'submit',
        view: 'default',
        text: 'Sign in',
        name: 'sign_in',
        className: styles.signIn,
      }).render(),
      signUp: new Link({
        text: 'Sign up',
        href: routes.signUp,
      }).render(),
    }
  }

  render() {
    const content = `
    ${this.content.login}
    ${this.content.password}
    ${this.content.signIn}
    ${this.content.signUp}
    `

    return template({ className: styles.container, card: new Card({ children: content, title: "Sign in" }).render()});
  }
}


