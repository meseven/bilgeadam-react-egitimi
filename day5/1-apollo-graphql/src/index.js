import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "@apollo/client";
import client from "./Apollo";

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);

serviceWorker.unregister();
