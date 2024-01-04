const js = require('json-server');


const data = js.create();

const route = js.router('db.json');


const mdlwre = js.defaults();

data.use(mdlwre);

data.use(js.bp);

data.use((request,response,next) => {


  if (request.method === 'POST' || request.method === 'PUT') {

    request.body.createdAt = Date.now();

  }


  next();


});


data.use(route);


const my_port = process.env.my_port || 8000;


data.listen(my_port, () => {



  console.log(`${my_port}`);

  
});
