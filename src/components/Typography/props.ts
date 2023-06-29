import { Variant } from '@mui/material/styles/createTypography';
import { TypographyProps as DefaultProps, TypographyPropsVariantOverrides } from '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bodyLarge: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodySmall: React.CSSProperties;
    caption: React.CSSProperties;
    display: React.CSSProperties;
    headingLarge: React.CSSProperties;
    headingMedium: React.CSSProperties;
    headingSmall: React.CSSProperties;
    labelLarge: React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelSmall: React.CSSProperties;
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bodyLarge?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    caption?: React.CSSProperties;
    display?: React.CSSProperties;
    headingLarge?: React.CSSProperties;
    headingMedium?: React.CSSProperties;
    headingSmall?: React.CSSProperties;
    labelLarge?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelSmall?: React.CSSProperties;
    titleLarge?: React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyLarge: true;
    bodyMedium: true;
    bodySmall: true;
    caption: true;
    display: true;
    headingLarge: true;
    headingMedium: true;
    headingSmall: true;
    labelLarge: true;
    labelMedium: true;
    labelSmall: true;
    titleLarge: true;
    titleMedium: true;
    titleSmall: true;
  }
}

export type TypographyProps = DefaultProps & {
  component?: React.ElementType;
  variant?: keyof TypographyPropsVariantOverrides | Variant;
};
