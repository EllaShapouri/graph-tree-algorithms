import { StyledButton } from "./Button.styled";

const Button = ({ children,...otherprops }) => {
    return <StyledButton {...otherprops}>{children}</StyledButton>;
};

export default Button;
