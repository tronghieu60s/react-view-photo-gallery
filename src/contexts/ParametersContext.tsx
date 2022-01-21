import React from "react";
import { PhotoGalleryProps } from "../common/types";

type PhotoGalleryContextProps = PhotoGalleryProps & {
  children?: JSX.Element;
};

const defaultParams: PhotoGalleryContextProps = {
  show: false,
  onShow: () => {},
  images: [],
};

const ParametersContext =
  React.createContext<PhotoGalleryContextProps>(defaultParams);

export const ParametersProvider = (props: PhotoGalleryContextProps) => {
  const { children, show, onShow, images } = props;

  if (!images || images.length === 0) {
    throw new Error("ParametersProvider: images should be provided");
  }

  return (
    <ParametersContext.Provider value={{ show, onShow, images }}>
      {children}
    </ParametersContext.Provider>
  );
};

export const ParametersConsumer = ParametersContext.Consumer;
export default ParametersContext;
