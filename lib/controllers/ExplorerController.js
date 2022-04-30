const ExplorerService = require('../services/ExplorerService');
const Reader = require('../utils/Reader');

class ExplorerController {
	static getExplorersList() {
		const explorers = Reader.readJsonFile('explorers.json');
		return explorers;
	}

	static getExplorersCertification(certification) {
		const explorers = Reader.readJsonFile('explorers.json');
		const mapeoExplorersConCertificado = ExplorerService.explorersCertification(explorers, certification);
		return mapeoExplorersConCertificado;
	}
}

module.exports = ExplorerController;
