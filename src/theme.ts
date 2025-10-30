import { createSystem, defaultConfig } from '@chakra-ui/react'

export const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: `'Inter', sans-serif`,
        },
        body: {
          value: `'Inter', sans-serif`,
        },
      },

      colors: {
        primary: {
          value: '#3182ce',
          description: 'primary',
        },
        primaryRgb: {
          value: '0, 102, 255',
          description: 'primary',
        },
        primary20: {
          value: 'rgba({colors.primaryRgb}, 0.2)',
          description: 'primary 20%',
        },
        primary30: {
          value: 'rgba({colors.primaryRgb}, 0.3)',
          description: 'primary 30%',
        },
        primary40: {
          value: 'rgba({colors.primaryRgb}, 0.4)',
          description: 'primary 40%',
        },
        primary50: {
          value: 'rgba({colors.primaryRgb}, 0.5)',
          description: 'primary 50%',
        },
        primary60: {
          value: 'rgba({colors.primaryRgb}, 0.6)',
          description: 'primary 60%',
        },
      },
    },
    semanticTokens: {
      colors: {
        'bg.primaryColor': {
          value: '#3182ce',
        },
      },
    },
  },
})
