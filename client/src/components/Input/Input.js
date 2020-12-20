import { Component } from "react";
import s from "./Input.module.css";

class Input extends Component {
  render() {
    return <input type="file" className={s.Input}></input>;
  }
}

export default Input;
