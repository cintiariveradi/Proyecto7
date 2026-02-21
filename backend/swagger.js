import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "5 Steps Only API",
      version: "1.0.0",
      description: "Documentación de la API del eCommerce 5 Steps Only",
    },
    servers: [
  {
    url: `http://localhost:${process.env.PORT || 4000}`,
  },
],
  },
  apis: ["./routes/*.js"], 
};

const specs = swaggerJSDoc(options);

export default specs;
