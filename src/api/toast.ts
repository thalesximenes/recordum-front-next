import { ToastPosition, toast } from "react-toastify";

export const newToast = (
  message: string | React.ReactNode,
  type: "SUCCESS" | "ERROR" | "WARNING" | "" = "",
  mobile = false
) => {
  interface ToastInterface {
    position: ToastPosition;
    closeOnClick: boolean;
    draggable: boolean;
  }

  const config: ToastInterface = {
    position: mobile ? "bottom-left" : "top-center",
    closeOnClick: true,
    draggable: true,
  };

  switch (type) {
    case "SUCCESS":
      toast.success(message, config);
      return;
    case "ERROR":
      toast.error(message, config);
      return;
    case "WARNING":
      toast.warning(message, config);
      return;
    default:
      toast(message, config);
      return;
  }
};
