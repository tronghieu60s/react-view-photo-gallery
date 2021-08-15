import React from "react";
import { ImageType } from "../types";

export type ParametersProps = {
  show: boolean;
  images: Array<ImageType>;
  children?: JSX.Element;
};

const ParametersContext = React.createContext<ParametersProps>({
  show: false,
  images: [],
});

export const ParametersProvider = (props: ParametersProps) => {
  const { children, show, images } = props;

  if (!images || images.length === 0) {
    throw new Error("ParametersProvider: images should be provided");
  }

  return (
    <ParametersContext.Provider value={{ show, images }}>
      {children}
    </ParametersContext.Provider>
  );
};

export const ParametersConsumer = ParametersContext.Consumer;
export default ParametersContext;
