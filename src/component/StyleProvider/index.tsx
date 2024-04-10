/* @prettier */

import { ReactNode } from "react";
import { styleSheet } from "../../css.tsx";

export type StyleProviderProps = {
  children?: ReactNode;
};

const StyleProvider = (props: StyleProviderProps) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleSheet() }} />
      {props.children}
    </>
  );
};

export default StyleProvider;
