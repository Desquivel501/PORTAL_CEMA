const { getdatos_user, insert_user, update_user } = require("../controllers/users");

exports.RutasUser = (app) => {

  app.get("/", (req, res) => {
    getdatos_user(req.query)
    .then((i) => {res.success(i)})
    .catch(e => res.fail(e.message, { type: e.name }, 404)); 
  });

  app.post("/", (req, res) => {
    insert_user(req.body)
    .then((i) => {res.success(i)})
    .catch(e => res.fail(e.message, { type: e.name }, 400));
  });

  app.patch("/", (req, res) => {
    update_user(req.body)
    .then((i) => {res.success(i)})
    .catch(e => res.fail(e.message, { type: e.name }, 400));
  });

  app.delete("/", (req, res) => {
    res.fail("DELETE method not implemented", {}, 501);
  });

}