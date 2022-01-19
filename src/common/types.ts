export type ImageType = {
  src: string;
  name?: string;
  caption?: string;
};

export type ParametersProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  images: Array<ImageType>;
  children?: JSX.Element;
};
