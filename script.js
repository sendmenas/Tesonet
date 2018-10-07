class ProductSlider {
	constructor() {
		this.selectNikeShoes = document.getElementById('selectNikeShoes');
		this.selectRegularShoes = document.getElementById('selectRegularShoes');
		this.selectSportShoes = document.getElementById('selectSportShoes');
		this.selectionBar = document.getElementById('selectionBar');

		this.imageNikeShoes = document.getElementById('nikeShoes');
		this.imageRegularShoes = document.getElementById('regularShoes');
		this.imageSportShoes = document.getElementById('sportShoes');

		this.mainBackground = document.getElementById('mainBackground');
		this.mainHeader = document.getElementById('productHeader');
		this.browseButton = document.getElementById('browseButton');

		this.selectionIndex = 1;
		this.setFunctionality();
	}

	setFunctionality() {
		let that = this;
		this.selectNikeShoes.addEventListener('click', (e) => { that.changeSelection('nike')});
		this.selectRegularShoes.addEventListener('click', (e) => { that.changeSelection('regular')});
		this.selectSportShoes.addEventListener('click', (e) => { that.changeSelection('sport')});				
	}

	changeSelection(section) {
		switch(section) {
			case 'nike':
				if (this.selectionIndex != 1) {
					this.slideBar(1);
					this.imageNikeShoes.className = 'image-container__nike slide-from-top';
					if (this.selectionIndex == 2) {
						this.imageRegularShoes.className = 'image-container__shoes slide-to-bottom';
						this.selectRegularShoes.removeAttribute('style');
					}
					if (this.selectionIndex == 3) {
						this.imageSportShoes.className = 'image-container__sport slide-to-bottom';
						this.selectSportShoes.removeAttribute('style');
					}

					this.selectionBar.setAttribute('style', 'background-color: #EB6763; top: 14px;');
					this.selectNikeShoes.setAttribute('style', 'margin-left: 12px;');

					this.mainBackground.setAttribute('style', 'background-color: rgba(235,103,99,0.2)');
					this.browseButton.setAttribute('style', 'background-color: #EB6763');
					this.mainHeader.innerText = 'Nike shoes';
					this.selectionIndex = 1;
					break;					
				}
			case 'regular':
				if (this.selectionIndex != 2) {
					this.slideBar(2);
					if (this.selectionIndex == 1) {
						this.imageRegularShoes.className = 'image-container__shoes slide-from-bottom';
						this.imageNikeShoes.className = 'image-container__nike slide-to-top';
						this.selectNikeShoes.removeAttribute('style');
					}
					if (this.selectionIndex == 3) {
						this.imageRegularShoes.className = 'image-container__shoes slide-from-top';
						this.imageSportShoes.className = 'image-container__sport slide-to-bottom';
						this.selectSportShoes.removeAttribute('style');
					}

					this.selectionBar.setAttribute('style', 'background-color: #3D4C5D; top: 67px;');
					this.selectRegularShoes.setAttribute('style', 'margin-left: 12px;');

					this.mainBackground.setAttribute('style', 'background-color: rgba(61,76,93,0.2)');
					this.browseButton.setAttribute('style', 'background-color: #3D4C5D');
					this.mainHeader.innerText = 'Shoes';
					this.selectionIndex = 2;
					break;					
				}
			case 'sport':
				if (this.selectionIndex != 3) {
					this.slideBar(3);
					this.imageSportShoes.className = 'image-container__sport slide-from-bottom';
					if (this.selectionIndex == 1) {
						this.imageNikeShoes.className = 'image-container__nike slide-to-top';
						this.selectNikeShoes.removeAttribute('style');
					}
					if (this.selectionIndex == 2) {
						this.imageRegularShoes.className = 'image-container__shoes slide-to-top';
						this.selectRegularShoes.removeAttribute('style');
					}

					this.selectionBar.setAttribute('style', 'background-color: #FFAC1A; top: 123px;');
					this.selectSportShoes.setAttribute('style', 'margin-left: 12px;');

					this.mainBackground.setAttribute('style', 'background-color: rgba(255,172,26,0.2)');
					this.browseButton.setAttribute('style', 'background-color: #FFAC1A');
					this.mainHeader.innerText = 'Sport shoes';
					this.selectionIndex = 3;
					break;					
				}
		}
	}

	slideBar(index) {

	}	
}
