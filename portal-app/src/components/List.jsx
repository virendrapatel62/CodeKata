import React from "react";
import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function List({ data, onClick, heading }) {
  return (
    <Card>
      <Card.Header>
        <h1>{heading}</h1>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {data.map(({ id, title }, index) => {
            return (
              <ListGroup.Item
                action
                onClick={() => onClick(id)}
                style={{
                  cursor: "pointer",
                }}
              >
                <b>{index + 1}. &nbsp;</b>
                {title}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
