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
      { url: process.env.API_URL || "http://localhost:4000" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

export default specs;