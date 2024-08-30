import StyleProvider from "./src/component/StyleProvider";
import { ReactNode } from "react";

export default (props: { children: ReactNode }) => <StyleProvider>{ props.children }</StyleProvider>;
