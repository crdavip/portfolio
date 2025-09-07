import clsx from "clsx";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  category: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, category, children }: Props) => {
  return (
    <div
      onClick={onClose}
      className={clsx("modal-bg", {
        "modal-bg-active": open,
      })}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx("modal", {
          "modal-active": open,
          "border-primary-color": category === "development",
          "border-secondary-color": category === "design",
        })}
      >
        <button onClick={onClose} className="modal-close">
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};
