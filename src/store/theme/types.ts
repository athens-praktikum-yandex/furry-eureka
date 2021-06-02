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
export type UserThemesState = UserTheme[];
export type GetUserThemePayload = { userId: number };
export type PutUserThemePayload = UserTheme;

export type ThemeState = {
  siteThemes: SiteTheme[],
  userThemes: UserTheme[],
};
