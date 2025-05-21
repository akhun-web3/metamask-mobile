import React from 'react';
import renderWithProvider from '../../../util/test/renderWithProvider';
import SimpleWebview from './';

describe('SimpleWebview', () => {
  it('should render correctly', () => {
    const { toJSON } = renderWithProvider(
      <SimpleWebview
        navigation={{
          setParams: () => {
            ('');
          },
          setOptions: () => null,
        }}
        route={{ params: { url: 'https://etherscan.io', title: 'etherscan' } }}
      />,
      {},
      false
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
