exports.seed = async function(knex) {
  await knex('Step_Ingredients').insert([
    {step_id: 1, ingredient_id: 1, quantity: 'some quantity..'},
    {step_id: 2, ingredient_id: 2, quantity: 'some quantity..'},
    {step_id: 2, ingredient_id: 3, quantity: 'some quantity..'},
    {step_id: 3},
    {step_id: 4, ingredient_id: 4, quantity: 'some quantity..'},
    {step_id: 5, ingredient_id: 3, quantity: 'some quantity..'},
    {step_id: 6, ingredient_id: 5, quantity: 'some quantity..'},
    {step_id: 7},
    {step_id: 8},
  ]);
};
