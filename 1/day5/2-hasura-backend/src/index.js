import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
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


// mehmetseven0@gmail.com
// twitter: @mehmeteseven