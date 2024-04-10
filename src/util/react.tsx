import React, { ReactElement, ReactNode } from "react";

export const findByType = (children: ReactNode, type: string): ReactElement => {
  const [hd, ...tl] = (
    React.Children.map(
      children,
      (child) =>
        React.isValidElement(child) &&
        typeof child.type !== 'string' &&
        child.type.name === type &&
        child,
    )?.filter((child) => !!child) || []) as ReactElement[];
  return !hd ? <React.Fragment/> : React.cloneElement(hd, { children: [hd.props.children, ...tl.map((child) => child.props.children)] });
};