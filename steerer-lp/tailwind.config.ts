import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '900px', 
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'base-blue1': '#000C54',
        'base-blue2': '#5688FE',
        'base-blue3': '#2755F3',
        'gray1': '#B3B0B8',
        'gray2': '#7C7A80',
        'black1': '#101114',
        'black2': '#1E1F24',
        'black3': '#2B2C33',
        'black4': '#454652',
      }
    },
  },
  plugins: [],
}
export default config
