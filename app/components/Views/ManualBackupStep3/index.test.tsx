import React from 'react';
import ManualBackupStep3 from './';
import renderWithProvider from '../../../util/test/renderWithProvider';

describe('ManualBackupStep3', () => {
  it('should render correctly', () => {
    const { toJSON } = renderWithProvider(<ManualBackupStep3 />);
    expect(toJSON()).toMatchSnapshot();
  });
});
