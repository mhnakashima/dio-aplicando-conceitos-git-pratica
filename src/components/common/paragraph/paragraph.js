import React from "react";
import "./paragraph.scss";
import parse from 'html-react-parser';

class Paragraph extends React.Component {
  render() {
    return (
      <div className="paragraph">
        <p>{parse(this.props.value)}</p>
      </div>
    );
  }
}

export default Paragraph;
