/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { FC } from 'react';
import { OwnProps } from './types';
import './ThemeSwitcher.css';

type Props = FC<OwnProps>;

export const ThemeSwitcher: Props = ({ theme, themes, onChange }) => (
  <div className="theme-switcher">
    Choose theme:
    {themes.map((item) => (
      <label key={item.id} className="theme-switcher__input">
        <input
          value={item.theme}
          name={item.theme}
          type="radio"
          checked={theme === item.theme}
          onChange={onChange}
        />
        {item.theme}
      </label>
    ))}
  </div>
);
