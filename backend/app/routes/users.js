
exports.RutasUser = (app) => {
    app.get("/", (req, res) => {
      res.apiResponse("Hello, World!");
    });

    // app.get("/", (req, res) => {
    //     getdatos_users(req.query)
    //     .then((i) => {res.apiResponse(i)})
    //     .catch(e => res.apiResponse(undefined,e.message,404));
    // });

    // app.post("/", (req, res) => {
    //     insert_user(req.body)
    //     .then((i) => {res.apiResponse(i)})
    //     .catch(e => res.apiResponse(undefined,e.message,404));
    // });
}