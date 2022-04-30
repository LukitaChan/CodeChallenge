const Reader = require('../utils/Reader');

class ExplorerController {
	static getExplorersList(explorer) {
		const explorers = Reader.readJsonFile('explorers.json');
		return explorers;
	}
}

module.exports = ExplorerController;
