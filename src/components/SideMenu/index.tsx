import { Content, SideMenuContainer, ToggleButton } from "./styles";

import DoubleArrow from "@/public/images/doubleArrow.svg";
import { SideMenuProps } from "./interfaces";
import { theme } from "../themes";
import { useState } from "react";

const SideMenu: React.FC<SideMenuProps> = ({
  children,
  initialOpen = false,
  width = 200,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

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
<<<<<<< HEAD
=======
          height={30}
>>>>>>> 597cc64c325b22b137b2e2fc59b5c92d63ac4820
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
