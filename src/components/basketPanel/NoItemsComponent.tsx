import { Card, PressEvent, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { divStyling, textStyling } from "./styles/style";

export default function NoItemsComponent() {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate("/")
    }
     
    return (
        <Card
        isPressable
        isHoverable
        variant="bordered"
        css={divStyling}
        onPress = {(e: PressEvent) => navigateTo()}
        >
        <Card.Body>
            <Text css={textStyling}>You haven't selected anything yet</Text>
        </Card.Body>
        </Card>
    );
}