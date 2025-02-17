export interface SideMenuProps {
  children: React.ReactNode;
  initialOpen?: boolean;
  isOpen?: boolean;
  width?: number;
  onToggle?: (isOpen: boolean) => void;
}
