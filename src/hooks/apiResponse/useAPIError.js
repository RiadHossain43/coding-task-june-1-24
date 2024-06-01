import { AxiosError as HTTPError } from "axios";
import toast from "react-hot-toast";

const useAPIError = () => {
  function _isAPIError(err) {
    return err instanceof HTTPError;
  }
  function _hanldeAPIError(err) {
    if(process.env.NODE_ENV==="development"){
      console.log(err.message)
    }
    /** we only allow netword of api realted error here */
    if (err instanceof HTTPError) {
      let statusCode = err.response?.status;
      /** here we have set up the priority levels of messages */
      let message =
        err.response?.data?.details?.description ||
        err.response?.data?.message ||
        err.message;
      /** 4xx errors need to be shown to users. */
      if (statusCode >= 400 && statusCode <= 499) {
        return toast.error(message);
      }
      if (statusCode >= 500 && statusCode <= 599) {
        if (process.env.NODE_ENV === "development") {
          return toast.error(message);
        } else {
          return toast.error(
            "Unexpected server error occured. Please contact support for help at support@imssystems.tech"
          );
        }
      }
    }
    /**
     * if code reaches here it means an UI or frontend related error.
     * we only show toast in development mode for better development experience.
     */
    if (process.env.NODE_ENV === "development") {
      return toast.error(
        "Unknown error detected in API Error handler: " + err?.message
      );
    }
  }
  function handleError(error) {
    if (_isAPIError(error)) {
      return _hanldeAPIError(error);
    }
  }
  return {
    handleError,
  };
};
export default useAPIError;
