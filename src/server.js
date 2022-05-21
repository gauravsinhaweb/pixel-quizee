import { Model, RestSerializer, Server } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import { categories } from "./backend/db/categories";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      category: Model,
      user: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));
    },
  });
}
