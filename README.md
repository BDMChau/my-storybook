## Tabula Storybook (Design Systems)

### 1. Source structure

```shell
src
├── assets
│   └── images
├── components
│   ├── index.tsx
│   ├── props.ts
│   └── styles.ts
├── stories
│   └── Layout.stories.tsx (To review demo layout)
├── styles
│   └── Themes (Config styles for systems)
└── index (Export components to use)
```

### 2. Install packages

```shell
npm i demo-components-ui
```

### 3. Publish packages to NPM

`Step 1:` Upgrade version in `package.json`
`Step 2:` Type `npm run build` to build package
`Step 3:` Type `npm publish` to publish package
`Step 4:` Login to account NPM if you are asked

> Contact to Mr.Hon to get account information :D

> If you want to review demo layout, see `4. Publish package to review`.

### 4. Publish package to review

After build, type `npm chromatic` to publish in Chromatic.

> In `package.json`, you must have `--project-token`
> See more: https://www.chromatic.com/docs/setup
