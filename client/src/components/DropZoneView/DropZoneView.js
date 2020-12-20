import { Component } from "react";
import s from "./DropZoneView";

class DropZoneView extends Component {
  render() {
    return (
      <div className={s.DropZone}>
        <p className={s.DropZoneText}></p>
      </div>
    );
  }
}

export default DropZoneView;
