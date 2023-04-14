// ** Type Imports
import { ReactNode } from 'react'
import { AppBarProps } from '@mui/material/AppBar'
import { Theme, SxProps, PaletteMode } from '@mui/material'
import { Settings } from 'src/@core/context/settingsContext'
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

export type Layout = 'vertical' | 'horizontal' | 'blank' | 'blankWithAppBar'

export type Skin = 'default' | 'bordered'

export type Mode = PaletteMode | 'semi-dark'

export type ContentWidth = 'full' | 'boxed'

export type AppBar = 'fixed' | 'static' | 'hidden'

export type Footer = 'fixed' | 'static' | 'hidden'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export type VerticalNavToggle = 'accordion' | 'collapse'

export type HorizontalMenuToggle = 'hover' | 'click'

export type BlankLayoutProps = {
  children: ReactNode
}

export type BlankLayoutWithAppBarProps = {
  children: ReactNode
}

export type NavSectionTitle = {
  auth?: boolean
  action?: string
  subject?: string
  sectionTitle: string
}

export type NavGroup = {
  // JORGE FLORES
  id?: string
  name?: string
  alias?: string
  group?: string
  level?: string
  component?: string
  order?: string
  key?: string
  icon?: string
  title: string
  auth?: boolean
  action?: string
  subject?: string
  badgeContent?: string
  children?: (NavGroup | NavLink)[]
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavLink = {

    // JORGE FLORES
/*
  "id": 1,
		"name": "Inicio",
		"alias": "Inicio",
		"group": "ZERO",
		"level": "ZERO",
		"component": "HOME_COMPONENT",
		"icon": "fa",
		"order": 0,
		"key": "HOME"
    */
  id?: string
  name?: string
  alias?: string
  group?: string
  level?: string
  component?: string
  order?: string
  key?: string

  icon?: string
  path?: string
  title: string
  auth?: boolean
  action?: string
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type VerticalNavItemsType = (NavLink | NavGroup | NavSectionTitle)[]
export type HorizontalNavItemsType = (NavLink | NavGroup)[]

export type FooterProps = {
  sx?: SxProps<Theme>
  content?: (props?: any) => ReactNode
}

export type VerticalLayoutProps = {
  appBar?: {
    componentProps?: AppBarProps
    content?: (props?: any) => ReactNode
  }
  navMenu: {
    lockedIcon?: ReactNode
    unlockedIcon?: ReactNode
    navItems?: VerticalNavItemsType
    content?: (props?: any) => ReactNode
    branding?: (props?: any) => ReactNode
    afterContent?: (props?: any) => ReactNode
    beforeContent?: (props?: any) => ReactNode
    componentProps?: Omit<SwipeableDrawerProps, 'open' | 'onOpen' | 'onClose'>
  }
}

export type HorizontalLayoutProps = {
  appBar?: {
    componentProps?: AppBarProps
    content?: (props?: any) => ReactNode
    branding?: (props?: any) => ReactNode
  }
  navMenu?: {
    sx?: SxProps<Theme>
    navItems?: HorizontalNavItemsType
    content?: (props?: any) => ReactNode
  }
}

export type LayoutProps = {
  hidden: boolean
  settings: Settings
  children: ReactNode
  footerProps?: FooterProps
  contentHeightFixed?: boolean
  scrollToTop?: (props?: any) => ReactNode
  saveSettings: (values: Settings) => void
  verticalLayoutProps: VerticalLayoutProps
  horizontalLayoutProps?: HorizontalLayoutProps
}
