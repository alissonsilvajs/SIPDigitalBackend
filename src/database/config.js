module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'thisIsRoot',
  database: 'sipdigital',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};
