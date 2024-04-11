/* @prettier */

import { ReactNode } from "react";
import StyleProvider from "./src/component/StyleProvider";

export default (props: { children: ReactNode }) => <StyleProvider>{props.children}</StyleProvider>;
