interface ITheme {
  COLORS: {
    PRIMARY: string;
    SECONDARY: string;
    TIERTIARY: string;
    BACKGROUND: string;
    FONT_PRIMARY: string;
    FONT_INFORMATION: string;
    FONT_SECONDARY: string;
    FONT_COMPLEMENTARY: string;
    WHITE: string;
    WARNING: string;
  };
}

export const defaultTheme: ITheme = {
  COLORS: {
    PRIMARY: '#622490',
    SECONDARY: '#1BA803',
    TIERTIARY: '#E28856',
    BACKGROUND: '#F0EDF5',
    FONT_PRIMARY: '#777777',
    FONT_INFORMATION: '#3D3D4C',
    FONT_SECONDARY: '#6A6A6A',
    FONT_COMPLEMENTARY: '#A0A0B2',
    WHITE: '#FFF',
    WARNING: '#FF6680',
  },
};
