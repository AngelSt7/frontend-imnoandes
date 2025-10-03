export interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export interface HeaderMenuProps {
  bgColor?: string;
  navLinks?: NavLink[];
  menuWidth?: string;
  fadeOnClose?: boolean;
}

export interface DesktopNavigationProps {
  navLinks: NavLink[];
}

export interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export interface MobileMenuOverlayProps {
  showOverlay: boolean;
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  menuWidth: string;
  fadeOnClose: boolean;
  closeMenu: () => void;
}

export interface MobileMenuHeaderProps {
  closeMenu: () => void;
}

export interface MobileNavigationProps {
  isMenuOpen: boolean;
}