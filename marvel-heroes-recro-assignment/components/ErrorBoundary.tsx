import { useRouter } from "next/router";
import { ErrorBoundary as ErrorHandler } from "react-error-boundary";
import { ErrorComponent } from "./ErrorComponent";

function ErrorFallback({ error, resetErrorBoundary }) {
  return <ErrorComponent message={error.message}></ErrorComponent>;
}

export const ErrorBoundary = ({ children }) => {
  const router = useRouter();
  return (
    <ErrorHandler
      FallbackComponent={ErrorFallback}
      onReset={() => {
        router.push("/");
      }}
    >
      {children}
    </ErrorHandler>
  );
};
