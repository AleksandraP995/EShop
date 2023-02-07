import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import { useGlobalContext } from "../../../assets/useContext/NewContext";

export const TotalAmount = () => {
    const { basket, setBasket } = useGlobalContext();
    const { overallPrice, setOverallPrice } = useGlobalContext();
    const { wrapPrice, setWrapPrice } = useGlobalContext();
    const priceNoWrap = overallPrice - wrapPrice;

    
    return (
        <Grid.Container gap={2}>
          <Grid sm={12} md={5} className = "totalAmount">
            <Card css={{ mw: "330px"}}>
              <Card.Header css={{ padding: "2em"}}>
                <Text b>Summary</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                    <span>Items:</span><span style={{ marginLeft: "12em"}}>{priceNoWrap}</span>
                </Text>
                <Text>
                    <span>Wrap:</span><span style={{ marginLeft: "12em"}}>{wrapPrice}</span>
                </Text>
              </Card.Body>
              <Card.Divider />
              <Text>
                    <span style={{ marginLeft: "-4.3em"}}><b>Total Price:</b></span><span style={{ marginLeft: "7.5em"}}> {overallPrice}</span>
              </Text>
              <Card.Footer>
                <Row justify="flex-end">
                  <Button size="sm" color="warning" className="button">BUY</Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      );
}