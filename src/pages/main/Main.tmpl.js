export const template = `
<div>
    <a href="https://vitejs.dev" target="_blank">
        <img src={{viteLogo}} class={{classNameLogo}} alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src={{javascriptLogo}} class={{classNameLogoVanilla}} alt="JavaScript logo" />
    </a>
    <h1>Hello!</h1>
    <div class={{classNameCard}}>
        <button id="counter" type="button"></button>
    </div>
    <p class={{classNameText}}>
        {{text}}
    </p>
</div>`