import * as React from 'react';

import { ExpoGovatarViewProps } from './ExpoGovatar.types';

export default function ExpoGovatarView(props: ExpoGovatarViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
