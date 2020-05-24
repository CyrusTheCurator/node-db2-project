exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          make: "Toyota",
          model: "Tundra",
          year: "1993",
          price: 2500,
          color: "pink",
        },
        {
          id: 2,
          make: "Tesla",
          model: "Cybertruck",
          year: "2020",
          price: 75000,
          color: "orange",
        },
        {
          id: 3,
          make: "Hyundai",
          model: "Elantra",
          year: "2015",
          price: 25000,
          color: "red",
        },
        {
          id: 4,
          make: "Honda",
          model: "Civic",
          year: "1985",
          price: 1250,
          color: "gray",
        },
        {
          id: 5,
          make: "Mazda",
          model: "3 hatchback",
          year: "2013",
          price: 22000,
          color: "blue",
        },
      ]);
    });
};
