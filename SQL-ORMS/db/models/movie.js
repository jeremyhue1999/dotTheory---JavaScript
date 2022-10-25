const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "title"',
          },
          notEmpty: {
            msg: 'Please provide a value for "title"',
          },
        },
      },
      runtime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "runtime"',
          },
          notEmpty: {
            msg: 'Please provide a value for "runtime"',
          },
          min: {
            args: 1,
            msg: 'Please provide a value greater than "0" for "runtime"',
          },
        },
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "realease date"',
          },
          notEmpty: {
            msg: 'Please provide a value for "release date"',
          },
          isAfter: {
            args: "1895-12-27",
            msg: 'Please provide a value on or after "1895-12-28" for "releaseDate"',
          },
        },
      },
      isAvailableOnVHS: {
        type: Sequelize.BOOLEAN,
        allowNull: false, // disallow null
      },
    },
    { sequelize },

    {
      timestamps: false, // disable timestamps
      sequelize,
    },
    // Model options object
    {
      freezeTableName: true, // disable plural table names
      sequelize,
    },
    // Model options object
    {
      modelName: "movie", // set model name to 'movie'; table name will be 'movies'
      sequelize,
    },
    // Model options object
    {
      tableName: "my_movies_table", // table name change
      sequelize,
    }
  );

  return Movie;
};
