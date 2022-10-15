import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as TokenProvider } from "./Context/authContext";
import { Provider as CompaniesProvider } from "./Context/getCompanies";
import { Provider as CompanyProvider } from "./Context/getCompany";
import { Provider as ComplexProvider } from "./Context/getComplex";
import { Provider as RoomProvider } from "./Context/getRoom";
import { Provider as BankProvider } from "./Context/getBank";
import { Provider as ComplexsProvider } from "./Context/getComplexs";
import { Provider as RoomsProvider } from "./Context/getRooms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CompaniesProvider>
        <CompanyProvider>
          <ComplexProvider>
            <RoomProvider>
              <BankProvider>
                <TokenProvider>
                  <ComplexsProvider>
                    <RoomsProvider>
                      <App />
                    </RoomsProvider>
                  </ComplexsProvider>
                </TokenProvider>
              </BankProvider>
            </RoomProvider>
          </ComplexProvider>
        </CompanyProvider>
      </CompaniesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
