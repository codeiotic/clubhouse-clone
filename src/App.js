import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/invite" component={PhoneConfirmation} />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
