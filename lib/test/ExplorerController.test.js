const ExplorerController = require('../controllers/ExplorerController');
const { explorersCertification } = require('../services/ExplorerService');

describe('Test Para Explorer Controller', () => {
	test('1. Email de personas con haveCertification True', () => {
		const filtradoExplorersCertification = ExplorerController.getExplorersCertification(true);
		expect(filtradoExplorersCertification).toStrictEqual([
			'Todd@visualpartnership.xyz',
			'Sexton@visualpartnership.xyz',
			'Sharlene@visualpartnership.xyz',
			'Howell@visualpartnership.xyz',
			'Haynes@visualpartnership.xyz',
			'Montoya@visualpartnership.xyz',
			'Benton@visualpartnership.xyz',
			'Dionne@visualpartnership.xyz',
			'Mcpherson@visualpartnership.xyz',
			'Gracie@visualpartnership.xyz',
			'Ila@visualpartnership.xyz',
			'Dorthy@visualpartnership.xyz',
			'Mcfarland@visualpartnership.xyz',
			'Maryann@visualpartnership.xyz',
			'Alana@visualpartnership.xyz',
			'Rosemary@visualpartnership.xyz',
			'Keith@visualpartnership.xyz',
			'Delaney@visualpartnership.xyz',
			'Ball@visualpartnership.xyz',
			'Sally@visualpartnership.xyz',
			'Antoinette@visualpartnership.xyz',
			'Juliette@visualpartnership.xyz',
			'Harding@visualpartnership.xyz',
			'Dixon@visualpartnership.xyz',
			'Beulah@visualpartnership.xyz',
			'Moses@visualpartnership.xyz',
			'Shields@visualpartnership.xyz',
			'Jewell@visualpartnership.xyz',
			'Hays@visualpartnership.xyz'
		]);
	});

	test('2. Name de personas con credits mayor a 500', () => {
		const filtradogetExplorers500 = ExplorerController.getExplorers500(501);
		expect(filtradogetExplorers500).toStrictEqual([
			'Warren',
			'Lucinda',
			'Phillips',
			'Taylor',
			'Mindy',
			'Kara',
			'Cora',
			'Roxanne',
			'Bennett',
			'Bessie',
			'Obrien',
			'Lynda',
			'Carey',
			'Gilda',
			'Elba',
			'Wall',
			'Cecile',
			'Reyna',
			'Richards',
			'Lindsey',
			'Margret',
			'Laverne',
			'Ayers',
			'Tillman',
			'Mosley',
			'Chase',
			'Ware'
		]);
	});
});
