import { registerWebModule, NativeModule } from 'expo';

import { ExpoGovatarModuleEvents } from './ExpoGovatar.types';

class ExpoGovatarModule extends NativeModule<ExpoGovatarModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoGovatarModule, 'ExpoGovatarModule');
