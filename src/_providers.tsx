import React from "react";
import { RecoilRoot } from "recoil";
import {
  BrowserRouter as Router,
} from "react-router-dom";

export const Providers : React.FC = ({ children }) => {
    return <RecoilRoot>
        <Router>
            {children}
        </Router>
    </RecoilRoot>
}