import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoGovatarModule extends NativeModule {
  getAvatar(username: string, gender: number): Promise<string>;
}

export default requireNativeModule<ExpoGovatarModule>('ExpoGovatar');
