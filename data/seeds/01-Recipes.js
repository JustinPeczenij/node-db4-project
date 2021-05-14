
exports.seed = async function(knex, Promise) {
  await knex('Recipes').insert([
    {recipe_name: 'Apple Pie', created_at: new Date().toUTCString()},
    {recipe_name: 'Peanut Butter', created_at: new Date().toUTCString()},
    {recipe_name: 'Ice Cream', created_at: new Date().toUTCString()},
  ]);
};
