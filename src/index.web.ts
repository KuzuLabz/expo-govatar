import { Gender, GenerateAvatarProps } from "./ExpoGovatar.types";
import './web/wasm_exec.js';

export const loadGovatarWebAsync = async () => {
    const goWasm = new window.Go();
    const govatarWasmPath = require('./web/govatar.wasm');
    const result = await WebAssembly.instantiateStreaming(fetch(govatarWasmPath), goWasm.importObject);
    goWasm.run(result.instance);
};

export const loadGovatarWeb = () => {
    const goWasm = new window.Go();
    const govatarWasmPath = require('./web/govatar.wasm');
    WebAssembly.instantiateStreaming(fetch(govatarWasmPath), goWasm.importObject).then((result) => {
        goWasm.run(result.instance);
    })
}

export const generateAvatar = async ({ username = '', gender = 'MALE' }: GenerateAvatarProps) => {
    const { avatar } = await window.generateAvatar(username, Gender[gender]);
    return avatar;
};

export { GenderType } from './ExpoGovatar.types';