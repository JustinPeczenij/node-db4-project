exports.seed = async function(knex, Promise) {
  await knex('Ingredients').insert([
    {ingredient_name: 'Apples'},
    {ingredient_name: 'Cinnamon'},
    {ingredient_name: 'Butter'},
    {ingredient_name: 'Peanuts'},
    {ingredient_name: 'Milk'},
  ]);
};
