const ExplorerService = require('../services/ExplorerService');
const Reader = require('../utils/Reader');

class ExplorerController {
	static getExplorersList() {
		const explorers = Reader.readJsonFile('explorers.json');
		return explorers;
	}

	static getExplorersCertification() {
		const explorers = Reader.readJsonFile('explorers.json');
		const mapeoExplorersConCertificado = ExplorerService.explorersCertification(explorers);
		return mapeoExplorersConCertificado;
	}

	static getExplorers500() {
		const explorers = Reader.readJsonFile('explorers.json');
		const mapeoExplorers500 = ExplorerService.explorersMore500(explorers);
		return mapeoExplorers500;
	}
}

module.exports = ExplorerController;
