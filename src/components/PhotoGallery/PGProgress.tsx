type Props = { currentProgress: number };

export default function PGProgress({ currentProgress }: Props) {
  const progressStyles = currentProgress > 0 ? { transform: "scaleX(1)" } : {};
  return (
    <div
      className="gl-progress"
      style={{ ...progressStyles, transitionDuration: `${currentProgress}ms` }}
    ></div>
  );
}
