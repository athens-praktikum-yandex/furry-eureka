import { SiteThemesState } from '@store/theme/types';
import { ChangeEvent } from 'react';

export type OwnProps = {
  theme: string,
  themes: SiteThemesState,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
};
