
exports.up = async function(knex) {
  await knex.schema
    .createTable('Recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name').unique().notNullable()
      tbl.date('created_at').unique().notNullable()
  })
    .createTable('Steps', tbl => {
      tbl.increments('step_id')
      tbl.integer('step_number').notNullable()
      tbl.string('step_instructions').notNullable()
      tbl.integer('recipes_id')
         .unsigned()
         .notNullable()
         .references('recipes_id')
         .inTable('Recipes')
         .onDelete('RESTRICT')
    })
    .createTable('Ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name').unique().notNullable()
    })
    .createTable('Step_Ingredients', tbl => {
      tbl.increments('step_ingredient_id')
      tbl.integer('step_id')
         .unsigned()
         .notNullable()
         .references('step_id')
         .inTable('Steps')
         .onDelete('RESTRICT')
      tbl.integer('ingredient_id')
         .unsigned()
         .notNullable()
         .references('ingredient_id')
         .inTable('Ingredients')
         .onDelete('RESTRICT')
      tbl.string('quantity').notNullable()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('Step_Ingredients')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Steps')
    .dropTableIfExists('Recipes')
};
