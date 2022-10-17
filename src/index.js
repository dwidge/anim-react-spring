import React from "react";
import styled from "styled-components";
import { useTrail, a } from "@react-spring/web";

export const Trail = ({
  from = { opacity: 0 },
  to = { opacity: 1, x: 0, y: 0 },
  config = { mass: 5, tension: 2000, friction: 200 },
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config,
    width: "100%",
    height: "100%",
    ...to,
    from,
    reset: true,
    delay: 0,
  });
  const AChild = a(styled.div`
    width: 100%;
    height: 100%;
  `);
  return trail.map((style, index) => (
    <AChild key={index} style={style}>
      {items[index]}
    </AChild>
  ));
};
