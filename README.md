# Entrega: Exercício módulo 32

Neste exercício você deve:
1) Criar uma lista de contatos utilizando o React.
2) Usar o Redux para gestão dos dados.
3) Utilizar o Styled Components para estilização.
4) Os contatos deverão conter as informações:
nome completo;
e-mail;
telefone;
5) Incluir as funcionalidades:
adição;
remoção;
edição dos itens da lista de contatos.
6) Criar um novo repositório no Github para armazenar o projeto.
7) Subir o conteúdo neste repositório e enviar o link.

# Configurações

### Criar projeto
```
npx create-react-app lista_contatos_react --template typescript
```

### EditorConfig
criar arquivo .editorconfig com o conteúdo:

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
```

### Eslint
instalação:
```
npm init @eslint/config@0.4.6
npm install @typescript-eslint/eslint-plugin@^5.50.0 @typescript-eslint/parser@^5.50.0 eslint@^8.33.0 eslint-config-prettier@^8.6.0 eslint-plugin-prettier@^4.2.1 eslint-plugin-react@^7.32.2 eslint-plugin-react-hooks@^4.6.0 prettier@2.8.3
npm install --save-dev eslint-plugin-react-hooks
```

Adicionar ao arquivo .eslintrc.json:

```
"plugins": [
    "react",
    "@typescript-eslint",
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
```

comando para executar o eslint:
```
npx eslint --fix .
```

### Prettier
instalação:
```
npm install --save-dev eslint-plugin-prettier eslint-config-prettir
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-plugin-prettier@latest
```
criar arquivo .prettierrc com o conteúdo:
```
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```
adicionar ao arquivo .eslintrc.json:
```
"extends": [
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:react/recommended",
  "plugin:prettier/recommended"
],
```
criar arquivo .vscode/settings.json com o conteúdo:
```
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```
comando para executar o prettier em todos os arquivos do projeto:
```
npx prettier --write .\src\
```

### Styled Components
```
npm install --save styled-components
npm install --save-dev @types/styled-components
```

### Redux Toolkit
```
npm install --save react-redux @reduxjs/toolkit
```

### React Router
```
npm install --save react-router-dom
```
