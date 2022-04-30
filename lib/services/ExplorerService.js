class ExplorerService {
	static explorersList(explorers) {
		const explorersLaLista = explorers.filter(explorer => explorer);
		return explorersList;
		//console.log(explorersList.length);
	}

	static explorersCertification(explorers) {
		const explorersTrueCertification = explorers.filter(explorer => explorer.haveCertification === true);
		const trueCertification = explorersTrueCertification.map(explorer => explorer.email);
		return trueCertification;
	}
}

module.exports = ExplorerService;
