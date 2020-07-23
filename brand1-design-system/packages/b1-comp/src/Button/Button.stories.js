import React from "react";
import Button from "./index.js";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button primary>Primary</Button>;
export const Secondary = () => <Button secondary>Secondary</Button>;
