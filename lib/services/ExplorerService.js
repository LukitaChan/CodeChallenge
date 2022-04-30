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

	static explorersMore500(explorers) {
		const explorersMoreQuinientos = explorers.filter(explorer => explorer.credits > 500);
		const more500 = explorersMoreQuinientos.map(explorer => explorer.name);
		return more500;
	}
}

module.exports = ExplorerService;
