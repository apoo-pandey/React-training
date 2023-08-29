import { lazy } from "react";
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
const RenderLoading = () => <div>Loading....</div>;
const LazyCompoent = lazy(() => import("./LazyComponent"));
const LazyHome = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ErrorBoundary>
        <Suspense fallback={RenderLoading()}>
          <LazyCompoent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default LazyHome;
