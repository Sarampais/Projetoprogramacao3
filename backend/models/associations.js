const Utente = require("./utente.model");
const Medico = require("./medico.model");
const Ferida = require("./ferida.model");
const Episodio = require("./episodio.model");
const Enfermeiro = require("./enfermeiro.model");

// Define associations here
const defineAssociations = () => {
    //Relação N:N - Utente - Médico
    Medico.belongsToMany(Utente, { through: 'medico_utente' });
    Utente.belongsToMany(Medico, { through: 'medico_utente' });

    //Relação 1:N - Utente - Ferida
    Utente.hasMany(Ferida, { foreignKey: 'n_de_utente' });
    Ferida.belongsTo(Utente, { foreignKey: 'n_de_utente' });

    //Relação 1:N - Médico - Ferida
    Medico.hasMany(Ferida, { foreignKey: 'n_mecan' });
    Ferida.belongsTo(Medico, { foreignKey: 'n_mecan' });

    //Relação 1:N - Ferida - Episodio
    Ferida.hasMany(Episodio, { foreignKey: 'id_ferida' });
    Episodio.belongsTo(Ferida, { foreignKey: 'id_ferida' });

    //Relação 1:N - Enfermeiro - Ferida
    Enfermeiro.hasMany(Episodio, { foreignKey: 'numero_mecan' });
    Episodio.belongsTo(Enfermeiro, { foreignKey: 'numero_mecan' });
};

module.exports = defineAssociations;