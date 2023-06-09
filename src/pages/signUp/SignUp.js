import template from './SignUp.hbs';
import styles from './styles.module.pcss';
import {
  Input,
  Button,
  Link,
  Card,
} from "../../components";
import { routes } from "../../appConstants";

export class SignUp {
  constructor() {
    this.content = {
      email: new Input({
        name: 'email',
        placeholder: 'email',
        className: styles.input,
      }).render(),
      login: new Input({
        name: 'login',
        placeholder: 'Login',
        className: styles.input,
      }).render(),
      firstName: new Input({
        name: 'first_name',
        placeholder: 'First name',
        className: styles.input,
      }).render(),
      secondName: new Input({
        name: 'second_name',
        placeholder: 'Second name',
        className: styles.input,
      }).render(),
      phone: new Input({
        name: 'phone',
        placeholder: 'Phone',
        className: styles.input,
      }).render(),
      password: new Input({
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        className: styles.input,
      }).render(),
      repeatPassword: new Input({
        type: 'password',
        name: 'repeat_password',
        placeholder: 'Repeat password',
        className: styles.input,
      }).render(),
      signUp: new Button({
        type: 'submit',
        view: 'default',
        text: 'Sign up',
        name: 'sign_up',
        className: styles.signUp,
      }).render(),
      signIn: new Link({
        text: 'Sign in',
        href: routes.signIn,
      }).render(),
    }
  }

  render() {
    const content = `
    ${this.content.email}
    ${this.content.login}
    ${this.content.firstName}
    ${this.content.secondName}
    ${this.content.phone}
    ${this.content.password}
    ${this.content.repeatPassword}
    ${this.content.signUp}
    ${this.content.signIn}
    `

    return template({ className: styles.container, card: new Card({ children: content, title: "Sign up" }).render()});
  }
}


