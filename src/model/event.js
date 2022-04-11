module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "event",
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      event_name: {
        type: DataTypes.STRING,
        require: true,
      },
      start_time: {
        type: DataTypes.DATE,
        require: true,
      },
      duration: {
        type: DataTypes.TIME,
        require: true,
      },
    },
    {
      tableName: "event",
      timestamps: false,
    }
  );
};
