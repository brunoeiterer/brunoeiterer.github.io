import { HamburgerButtonContainer, HamburgerButtonLine } from "./HamburgetButton.styles";

interface HamburgerButtonProps {
    onClick: () => void;
}

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
    return (
        <HamburgerButtonContainer
            onClick={onClick}
        >
            <HamburgerButtonLine />
            <HamburgerButtonLine />
            <HamburgerButtonLine />
        </HamburgerButtonContainer>

    )
}