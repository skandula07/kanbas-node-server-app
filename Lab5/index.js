import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";

const Lab5 = (app) => {
    app.get("/lab5/welcome", (req, res) => {
      res.send("Welcome to Assignment 5!!!! :)");
    });
    PathParameters(app);
    QueryParameters(app);
    WorkingWithObjects(app)
    WorkingWithArrays(app)
  };

  // 


  export default Lab5;