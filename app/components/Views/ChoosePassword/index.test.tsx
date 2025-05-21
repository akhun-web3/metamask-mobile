import React from 'react';
import ChoosePassword from './';
import renderWithProvider from '../../../util/test/renderWithProvider';
import { ONBOARDING, PROTECT } from '../../../constants/navigation';
import { backgroundState } from '../../../util/test/initial-root-state';
import { MOCK_ACCOUNTS_CONTROLLER_STATE } from '../../../util/test/accountsControllerTestUtils';

const initialState = {
  user: {
    passwordSet: true,
    seedphraseBackedUp: false,
  },
  engine: {
    backgroundState: {
      ...backgroundState,
      AccountsController: MOCK_ACCOUNTS_CONTROLLER_STATE,
    },
  },
};

describe('ChoosePassword', () => {
  it('should render correctly', () => {
    const { toJSON } = renderWithProvider(
      <ChoosePassword route={{ params: [ONBOARDING, PROTECT] }} />,
      { state: initialState }
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
