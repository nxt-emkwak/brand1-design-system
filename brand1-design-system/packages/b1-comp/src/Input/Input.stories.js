import React from "react";

import Input from "./index.js";

export default {
  component: Input,
  title: "Input",
};

export const Input1 = () => <Input primary />;

export const placeholder = () => (
  <Input secondary placeholder="user@gmail.com" />
);
