1. Initilaize nodejs project

```
npm init -y
```

2. Install Typescript and ts-node
```
npm install typescript ts-node @types/node --save-dev
```

3. Generate tsconfig.json file using following command
```
npx tsc --init
```

4. Create src folder and create file inside it
```
mkdir src && touch src/index.ts
```

5. Place scripts inside package.json
```
  "scripts": {
    "build": "tsc",
    "start": "npm run build && node dist/index.js",
    "dev": "ts-node src/index.ts"
  }
```
6. Run start command
```
npm ru  start
```
7. To setup eslint run the following command
```
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
npx eslint --init
```
