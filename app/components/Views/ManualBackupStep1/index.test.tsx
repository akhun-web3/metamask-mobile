import React from 'react';
import renderWithProvider from '../../../util/test/renderWithProvider';
import ManualBackupStep1 from './';
import { AppThemeKey } from '../../../util/theme/models';

const initialState = {
  user: { appTheme: AppThemeKey.light },
};

describe('ManualBackupStep1', () => {
  it('should render correctly', () => {
    const { toJSON } = renderWithProvider(
      <ManualBackupStep1
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
          },
        }}
      />,
      { state: initialState },
      false
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
