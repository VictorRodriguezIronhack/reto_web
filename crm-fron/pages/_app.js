import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout";
import client from "../config/apollo";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
