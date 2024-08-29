### **Getting started**
- clone the project:
```shell
  git clone git@github.com:internshipsamyrai44/components-lib.git
```

- switch to **dev** branch:
```shell
  git checkout dev
```
- install project dependencies:
```shell
  pnpm install
```

- the project is hosting and available on http://localhost:5173
  <br/>

### **Development**
- all development is focused in **dev** branch
- to start your task you have to create a new branch from the **dev** branch. A name for this branch gotta reflect your current task. When the task is done you must commit to your current branch, then switch to **dev** and pull all changes from it. Resolve merge conflicts, if there are any. Then create a new **pull request**.<br />
  ❗ Don't forget to check if you're actually pointing to the **dev** branch!


- Follow [this guide](https://code-style.it-incubator.io/react/commits) to write the commit messages in the right way! <br />
  Briefly: add prefixes to the commit names, start them with a small letter and put the colon with the space (`': '`) after it at the end.<br />
  For example:
    + **feat:** – new feature implemented (added footer, product card, some api request or component logic etc.)
    + **fix:** – fixed some error(s).
    + **refactor:** – removed, added or moved files, edited code formatting (white-space, formatting, missing semi-colons, etc), improved some algorithms etc.    
      See more prefixes in the guide above.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
