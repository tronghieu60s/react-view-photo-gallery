import React from "react";
import { ImageType } from "../types";

export type ParametersProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  images: Array<ImageType>;
  children?: JSX.Element;
};

const defaultParams: ParametersProps = {
  show: false,
  setShow: () => {},
  images: [],
};

const ParametersContext = React.createContext<ParametersProps>(defaultParams);

export const ParametersProvider = (props: ParametersProps) => {
  const { children, show, setShow, images } = props;

  if (!images || images.length === 0) {
    throw new Error("ParametersProvider: images should be provided");
  }

  return (
    <ParametersContext.Provider value={{ show, setShow, images }}>
      {children}
    </ParametersContext.Provider>
  );
};

export const ParametersConsumer = ParametersContext.Consumer;
export default ParametersContext;
