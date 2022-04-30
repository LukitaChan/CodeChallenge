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

	static getExplorers500(credits) {
		const explorers = Reader.readJsonFile('explorers.json');
		const mapeoExplorers500 = ExplorerService.explorersMore500(explorers, credits);
		return mapeoExplorers500;
	}
}

module.exports = ExplorerController;
