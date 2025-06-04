// Reexport the native module. On web, it will be resolved to ExpoGovatarModule.web.ts
// and on native platforms to ExpoGovatarModule.ts
export { default } from './ExpoGovatarModule';
export { default as ExpoGovatarView } from './ExpoGovatarView';
export * from  './ExpoGovatar.types';
