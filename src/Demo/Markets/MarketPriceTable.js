import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
  Table,
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";

class MarketPriceTable extends React.Component {
  render() {
    return (
      <Aux>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>a</th>
              <th>a</th>
              <th>a</th>
              <th>a</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>Larry the Bird</td>

            </tr>
          </tbody>
        </Table>
      </Aux>
    );
  }
}

export default MarketPriceTable;
