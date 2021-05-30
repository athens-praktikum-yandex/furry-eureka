export type SiteTheme = {
  id: number,
  theme: string,
  description: string,
};

export type UserTheme = {
  id: number,
  theme?: string,
  themeId: number,
  ownerId: number,
};

export type SiteThemesState = SiteTheme[];
export type UserThemeState = UserTheme;
export type GetUserThemePayload = { userId: number };
export type PutUserThemePayload = Omit<UserTheme, 'theme'>;

export type ThemeState = {
  siteThemes: SiteTheme[],
  userTheme: UserTheme,
};
