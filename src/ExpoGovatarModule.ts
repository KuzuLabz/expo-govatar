import { NativeModule, requireNativeModule } from 'expo';

import { ExpoGovatarModuleEvents } from './ExpoGovatar.types';

declare class ExpoGovatarModule extends NativeModule<ExpoGovatarModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoGovatarModule>('ExpoGovatar');
