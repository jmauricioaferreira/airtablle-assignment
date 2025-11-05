import "./ZoomControls.css";

type ZoomControlsProps = {
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export function ZoomControls({ onZoomIn, onZoomOut }: ZoomControlsProps) {
  return (
    <div className="zoom-controls">
      <button onClick={onZoomOut}>−</button>
      <button onClick={onZoomIn}>+</button>
    </div>
  );
}
