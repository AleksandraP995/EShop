
import toast, { Toaster } from "react-hot-toast";

export const ToasterComponent = () => {
    return (
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
    )
}