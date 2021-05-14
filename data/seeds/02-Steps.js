exports.seed = async function(knex, Promise) {
  await knex('Steps').insert([
    {step_number: 1, step_instructions: "Cut up some APPLES", recipe_id: 1},
    {step_number: 2, step_instructions: "Cinnamon and Butter Ingredients", recipe_id: 1},
    {step_number: 3, step_instructions: "no ingredients", recipe_id: 1},
    {step_number: 1, step_instructions: "grind peanuts", recipe_id: 2},
    {step_number: 2, step_instructions: "make into butter", recipe_id: 2},
    {step_number: 1, step_instructions: "get some milk", recipe_id: 3},
    {step_number: 2, step_instructions: "put it in the freezer", recipe_id: 3},
    {step_number: 3, step_instructions: "enjoy", recipe_id: 3},
  ]);
};
