import { ToastContainer } from "react-toastify";
import styled from "@emotion/styled";
import { theme } from "@/components/themes";

const Toast = styled(ToastContainer)`
  .Toastify__progress-bar {
    height: 3px;
  }

  .Toastify__toast {
    &-container {
    }

    &--success {
      background: ${theme?.colors?.green?.[0]};
      color: ${theme?.colors?.green?.[9]};

      .Toastify__toast-icon {
        svg {
          fill: ${theme?.colors?.green?.[8]};
        }
      }

      .Toastify__progress-bar {
        background: ${theme?.colors?.green?.[8]};
      }
    }

    &--error {
      background: ${theme?.colors?.red?.[0]};
      color: ${theme?.colors?.red?.[9]};

      .Toastify__toast-icon {
        svg {
          fill: ${theme?.colors?.red?.[6]};
        }
      }

      .Toastify__progress-bar {
        background: ${theme?.colors?.red?.[6]};
      }
    }

    &--warning {
      background: ${theme?.colors?.yellow?.[0]};
      color: ${theme?.colors?.yellow?.[9]};

      .Toastify__toast-icon {
        svg {
          fill: ${theme?.colors?.yellow?.[7]};
        }
      }

      .Toastify__progress-bar {
        background: ${theme?.colors?.yellow?.[7]};
      }
    }

    &--default {
      color: #333;

      .Toastify__progress-bar {
        background: #bbb;
      }
    }
  }
`;

export default Toast;
