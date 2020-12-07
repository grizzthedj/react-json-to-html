import * as React from "react";

export interface JsonTableProps {
  json: any;
  css?: object;
  indent?: number;
}

export class JsonTable extends React.Component<JsonTableProps> {}
