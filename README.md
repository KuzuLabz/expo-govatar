# expo-govatar
> A mobile / wasm port of [Govatar](https://github.com/o1egl/govatar)

Generate funny avatars

## Install

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Bun
```bash
bun add @kuzulabz/expo-govatar
```

### Yarn
```bash
yarn add @kuzulabz/expo-govatar
```

### NPM
```bash
npm install @kuzulabz/expo-govatar
```

# Usage
[Full example](https://github.com/KuzuLabz/expo-govatar/blob/main/example/App.tsx)
```ts
import { generateAvatar } from '@kuzulabz/govatar';

const username = 'KuzuLabz';
const base64String = await generateAvatar({username});
const imageUri = `data:image/png;base64,${base64String}`;
```

### Web
Web requires these extra steps:
#### Metro Config
Add ```config.resolver.assetExts.push('wasm');``` to your metro config file.

#### Load WASM
```ts
import { loadGovatarWeb, loadGovatarWebAsync } from '@kuzulabz/govatar';

// for example, in App.tsx
loadGovatarWeb();

// or asyncronously
await loadGovatarWebAsync();
```

# API
### [Functions](https://github.com/KuzuLabz/expo-govatar/blob/main/src/ExpoGovatar.types.ts)

#### `generateAvatar({username?: string, gender?: GenderType = 'MALE'}): Promise<string>`
Generate an avatar  
- **username**\<optional\>: A username or text 
- **gender**\<optional\>: [GenderType](#GenderType) (default: normal)
- **returns**: base64 string

### [Types](https://github.com/KuzuLabz/expo-govatar/blob/main/src/ExpoGovatar.types.ts)

#### GenderType
A selectable gender:
  - `MALE`
  - `FEMALE`