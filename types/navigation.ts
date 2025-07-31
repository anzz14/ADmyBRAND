export interface NavigationItem {
  id: string
  name: string
  href: string
}

export interface NavigationProps {
  navigationItems: NavigationItem[]
  onSmoothScroll: (e: React.MouseEvent, targetId: string) => void
  activeSection: string
  isHomePage: boolean
}
