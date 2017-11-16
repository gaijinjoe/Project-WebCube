import React, { PureComponent } from 'react';
import localforage from 'localforage';
import withPersist from 'redux-cube/lib/plugins/withPersist';
import { createApp } from 'redux-cube';

import { reducer as sampleReducer, epics } from './reducers/sample';
import Sample from './containers/Sample';

@createApp(
  withPersist({
    reducers: {
      items: sampleReducer,
    },
    epics,
    preloadedState: typeof window !== 'undefined' && window._preloadSampleData,
    devToolsOptions: { name: 'SampleApp' },
    persistStorage: localforage,
    persistKey: 'sampleRoot2',
  }),
)
class SampleApp extends PureComponent {
  render() {
    return <Sample />;
  }
}

export const App = SampleApp;
