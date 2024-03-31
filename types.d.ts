type Primary = 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5' | 'color-6' | 'color-7' | 'color-8'
type Bg = 'bg-1' | 'bg-2'

type Theme = {
    primary: Primary
    bg: Bg   
}

interface ThemeState  {
    theme: Theme
}

interface ThemeContext extends ThemeState {
    setTheme: (theme: primary | Bg) => void
}