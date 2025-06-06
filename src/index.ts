// Reexport the native module. On web, it will be resolved to ExpoGovatarModule.web.ts
// and on native platforms to ExpoGovatarModule.ts
import { Gender, GenerateAvatarProps } from './ExpoGovatar.types';
import ExpoGovatarModule from './ExpoGovatarModule';

/**
 * Loads the Govatar WebAssembly module asynchronously.
 * 
 * @platform web
 */
export const loadGovatarWebAsync = async () => { };

/**
 * Loads the Govatar WebAssembly module synchronously.
 * 
 * @platform web
 */
export const loadGovatarWeb = () => { };

/**
 * Generates an avatar based on the provided username and gender
 * @param {Object} params - The parameters for avatar generation
 * @param {string} [params.username=''] - The username to generate the avatar for
 * @param {('MALE'|'FEMALE')} [params.gender='MALE'] - The gender of the avatar
 * @returns {Promise<string>} A promise that resolves to a base64 string
 */
export const generateAvatar = async ({ username = '', gender = 'MALE' }: GenerateAvatarProps) => {
    const avatar = await ExpoGovatarModule.getAvatar(username, Gender[gender]);
    return avatar;
};

export { GenderType } from './ExpoGovatar.types';