exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable();
      tbl.text("description");
      tbl.boolean("completed").defaultTo(false).notNullable();
    })
    .createTable("project_tasks", (tbl) => {
      tbl.increments();
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false).notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable().unique();
      tbl.text("description");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable();
      tbl.text("description");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("project_tasks")
    .dropTableIfExists("projects");
};
