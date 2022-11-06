import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";
import Project from "./content/Project";
import Dataset from "./content/Dataset";
import Visualization from "./content/Visualization";
import Info from "./info/Info";
import Header from "./header/Header";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Grid item xs={2.75}>
              <div className="sidebars">
                <Sidebar />
              </div>
            </Grid>
            <Grid item xs={6}>
              <Routes>
                <Route exact path="/" element={<Project />}></Route>
                <Route exact path="/project" element={<Project />}></Route>
                <Route exact path="/dataset" element={<Dataset />}></Route>
                <Route exact path="/demo" element={<Content />}></Route>
                <Route
                  exact
                  path="/visualization"
                  element={<Visualization />}
                ></Route>
              </Routes>
            </Grid>
            <Grid item xs>
              <div className="sidebars">
                <Info />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );
}

export default App;
