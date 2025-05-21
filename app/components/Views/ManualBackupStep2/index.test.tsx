import React from 'react';
import ManualBackupStep2 from './';
import renderWithProvider from '../../../util/test/renderWithProvider';

const initialState = {
  user: {
    passwordSet: true,
    seedphraseBackedUp: false,
  },
};

describe('ManualBackupStep2', () => {
  it('should render correctly', () => {
    const { toJSON } = renderWithProvider(
      <ManualBackupStep2
        route={{
          params: {
            words: [
              'abstract',
              'accident',
              'acoustic',
              'announce',
              'artefact',
              'attitude',
              'bachelor',
              'broccoli',
              'business',
              'category',
              'champion',
              'cinnamon',
            ],
            steps: ['one', 'two', 'three'],
          },
        }}
      />,
      { state: initialState }
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
