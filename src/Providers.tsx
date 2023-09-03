import { lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NearSocialBridgeProvider } from "near-social-bridge";

import Loading from "./components/Loading";
import mock from "./mock";

// Set mocked reponses for requests
if (process.env.REACT_APP_ENV !== "production") {
  mock();
}

const Routes = lazy(() => import("./routes/Routes"));

const Providers = () => {
  return (
    <ChakraProvider>
      <NearSocialBridgeProvider fallback={<Loading />}>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </NearSocialBridgeProvider>
    </ChakraProvider>
  );
};

export default Providers;
