import "../styles/globals.css";
import { AuthProvider } from "../security/AuthProvider";
import { FormProvider } from "@/security/FormContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </AuthProvider>
  );
}
export default MyApp;
