import { toast } from "react-toastify";

export const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const showToast = ({ type, value }) => {
  const toastProps = ["success", "error", "warn", "info"];
  if (toastProps.includes(type)) {
    toast[type](value, toastOptions);
  } else {
    console.error("type sent to toast is::", type);
    throw new Error("Please enter correct toast type");
  }
};
