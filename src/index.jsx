import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import SignIn from "./auth/SignIn.jsx";
import SignUp from "./auth/SignUp.jsx";

export function App() {
  return (
    <>
      <LocationProvider>
        {/* <Header /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <main>
				<Router>
					<Route path="/" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/dashboard" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
      </LocationProvider>
    </>
  );
}

render(<App />, document.getElementById("app"));
