const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    language_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interest_type: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    language_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'language',
        key: 'id',
      }
    },
    interest_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'interest',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;