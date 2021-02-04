import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Table,
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import MarketPriceTable from "./MarketPriceTable";

const mock_data = {
  btc: {
    bithumb: "1",
    upbit: "2",
  },
  eth: {
    bithumb: "1",
    upbit: "2,",
  },
};

class Markets extends React.Component {
  state = {
    Data: {},
  };

  componentDidMount() {
    this.renderAutoComplete();
  }

  renderAutoComplete() {
    this.setState({ data: { ...mock_data } });
  }

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Total exchange</Card.Title>
              </Card.Header>
              <Card.Body>
                <MarketPriceTable 
                  data={this.state.data} 
                  test='a'  
                  />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Markets;
