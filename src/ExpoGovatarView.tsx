import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoGovatarViewProps } from './ExpoGovatar.types';

const NativeView: React.ComponentType<ExpoGovatarViewProps> =
  requireNativeView('ExpoGovatar');

export default function ExpoGovatarView(props: ExpoGovatarViewProps) {
  return <NativeView {...props} />;
}
