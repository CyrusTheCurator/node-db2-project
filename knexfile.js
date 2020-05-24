module.exports = {
  development: {
    client: "sqlite",
    useNullAsDefault: true,
    connection: {
      filename: "./data/cars.db3",
    },
    migrations: { directory: "migrations/" },
    seeds: { directory: "seeds/" },
  },
};
