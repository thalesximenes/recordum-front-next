import { Content, SideMenuContainer, ToggleButton } from "./styles";
import { useEffect, useState } from "react";

import DoubleArrow from "@/public/images/doubleArrow.svg";
import { SideMenuProps } from "./interfaces";
import { theme } from "../themes";
import useWindowSize from "@/hooks/useWindowSize";

const SideMenu: React.FC<SideMenuProps> = ({
  children,
  initialOpen = false,
  width = 200,
  onToggle,
}) => {
  const { isDesktop } = useWindowSize();
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    if (isDesktop) setIsOpen(true);
  }, [isDesktop]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <SideMenuContainer isOpen={isOpen} width={width}>
      <ToggleButton onClick={handleToggle}>
        <DoubleArrow
          border
          fill={theme.colors.purple[5]}
          width={30}
          height={30}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            border: isOpen ? "none" : `3px solid ${theme.colors.purple[5]}bf`,
            borderRadius: "2rem",
          }}
        />
      </ToggleButton>
      <Content width={width}>{children}</Content>
    </SideMenuContainer>
  );
};

export default SideMenu;
