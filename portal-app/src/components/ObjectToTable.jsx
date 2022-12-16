import React from "react";
import { Table } from "react-bootstrap";

export default function ObjectToTable({ data }) {
  const keys = Object.keys(data);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {keys.map((key) => {
          return (
            <tr>
              <td tabIndex={1}>{key}</td>
              <td tabIndex={1}>
                {typeof data[key] === "object" ? (
                  <ObjectToTable data={data[key]} />
                ) : (
                  data[key]
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
