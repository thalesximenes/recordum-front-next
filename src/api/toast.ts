import { toast } from "react-toastify";

export const newToast = (
  message: string | React.ReactNode,
  type: "SUCCESS" | "ERROR" | "WARNING" | "" = "",
  mobile = false
) => {
  const config = {
    position: mobile ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_CENTER,
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
