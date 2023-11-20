import Database from "../Database/index.js";
function CourseRoutes(app) {
  app.post("/api/courses", (req, res) => {
    console.log("Received POST request for creating a new course:", req.body);
    const course = { ...req.body, _id: new Date().getTime().toString() };
    Database.courses.push(course);
      console.log("New course added:", course);
    res.send(course);
  });
  app.get('/api/courses', (req, res) => {
      const courses = Database.courses;
      res.send(courses);
    });
  
  //   const { id } = req.params;
  //   const courses = Database.courses.find((c) => c._id === id);
  //   if (!courses) {
  //     res.status(404).send("Course not found");
  //     return;
  //   }
  //   res.send(courses);
  // });

  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.send(course);
  });

  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses.filter((c) => c._id !== id);
    res.sendStatus(204);
  });
}
export default CourseRoutes;
