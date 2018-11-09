class ProductSlider {
	constructor() {
		// Header items
		this.openMobileMenu = document.getElementById('openMobileMenu');
		this.closeMobileMenu = document.getElementById('closeMobileMenu');
		this.headerNavigation = document.getElementById('headerNavigation');
		// Main navigation items
		this.selectNikeShoes = document.getElementById('selectNikeShoes');
		this.selectRegularShoes = document.getElementById('selectRegularShoes');
		this.selectSportShoes = document.getElementById('selectSportShoes');
		this.selectionBar = document.getElementById('selectionBar');
		// Images items
		this.imageNikeShoes = document.getElementById('nikeShoes');
		this.imageRegularShoes = document.getElementById('regularShoes');
		this.imageSportShoes = document.getElementById('sportShoes');
		// Info section items
		this.mainBackground = document.getElementById('mainBackground');
		this.mainHeader = document.getElementById('productHeader');
		this.browseButton = document.getElementById('browseButton');
		// General
		this.timeoutId = null;
		this.selectionIndex = 1;
		
		if (screen.width > 320) {
			this.setDesktopFunctionality();	
		} else {
			this.setMobileFunctionality();
		}
	}

	setDesktopFunctionality() {
		let that = this;
		this.imageNikeShoes.className = 'image-container__nike slide-from-top';
		document.addEventListener('wheel', (e) => { this.onMouseScroll(e, that); });
		this.selectNikeShoes.addEventListener('click', (e) => { this.changeSelection('nike'); });
		this.selectRegularShoes.addEventListener('click', (e) => { this.changeSelection('regular'); });
		this.selectSportShoes.addEventListener('click', (e) => { this.changeSelection('sport'); });
	}

	setMobileFunctionality() {
		this.imageNikeShoes.setAttribute('style', 'display: initial;');
		this.headerNavigation.setAttribute('style', 'display: none;');
		this.selectNikeShoes.className = 'selected';
		this.openMobileMenu.addEventListener('click', (e) => { this.showMobileMenu(); })
		this.closeMobileMenu.addEventListener('click', (e) => { this.hideMobileMenu(); })
		this.selectNikeShoes.addEventListener('click', (e) => { this.changeMobileSelection('nike'); });
		this.selectRegularShoes.addEventListener('click', (e) => { this.changeMobileSelection('regular'); });
		this.selectSportShoes.addEventListener('click', (e) => { this.changeMobileSelection('sport'); });			
	}

	onMouseScroll(event, that) {
		if (that.timeoutId != null) {
			clearTimeout(that.timeoutId);
		}
		if (event.wheelDeltaY > 0) {
			if (that.selectionIndex == 2) {
				that.timeoutId = setTimeout(function() {
					that.changeSelection('nike');
				}, 250);
			} else if (that.selectionIndex == 3) {
				that.timeoutId = setTimeout(function() {
					that.changeSelection('regular');
				}, 250);
			}
		} else {
			if (that.selectionIndex == 1) {
				that.timeoutId = setTimeout(function() {
					that.changeSelection('regular');
				}, 250);
			} else if (that.selectionIndex == 2) {
				that.timeoutId = setTimeout(function() {
					that.changeSelection('sport');
				}, 250);
			}			
		}
	}

	changeSelection(section) {
		switch(section) {
			case 'nike':
				if (this.selectionIndex != 1) {
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
					this.setInfoBlockColorsAndText(1);

					this.selectionIndex = 1;
				}
				break;					
			case 'regular':
				if (this.selectionIndex != 2) {
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
					this.setInfoBlockColorsAndText(2);

					this.selectionIndex = 2;
				}
				break;					
			case 'sport':
				if (this.selectionIndex != 3) {
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
					this.setInfoBlockColorsAndText(3);

					this.selectionIndex = 3;
				}
				break;					
		}
	}

	changeMobileSelection(select) {
		switch(select) {
			case 'nike':
				if (this.selectionIndex != 1) {
					this.imageNikeShoes.setAttribute('style', 'display: initial;');
					this.imageRegularShoes.setAttribute('style', 'display: none;');
					this.imageSportShoes.setAttribute('style', 'display: none;');
					this.setInfoBlockColorsAndText(1);
					this.setUnderlineToNav(1);
					this.selectionIndex = 1;
				}
				break;
			case 'regular':
				if (this.selectionIndex != 2) {
					this.imageRegularShoes.setAttribute('style', 'display: initial;');
					this.imageNikeShoes.setAttribute('style', 'display: none;');
					this.imageSportShoes.setAttribute('style', 'display: none;');
					this.setInfoBlockColorsAndText(2);
					this.setUnderlineToNav(2);
					this.selectionIndex = 2;
				}
				break;
			case 'sport':
				if (this.selectionIndex != 3) {
					this.imageSportShoes.setAttribute('style', 'display: initial;');
					this.imageNikeShoes.setAttribute('style', 'display: none;');
					this.imageRegularShoes.setAttribute('style', 'display: none;');
					this.setInfoBlockColorsAndText(3);
					this.setUnderlineToNav(3);
					this.selectionIndex = 3;
				}
				break;
		}
	}

	setInfoBlockColorsAndText(index) {
		switch(index) {
			case 1:
				this.mainBackground.setAttribute('style', 'background-color: rgba(235,103,99,0.2)');
				this.browseButton.setAttribute('style', 'background-color: #EB6763');
				this.mainHeader.innerText = 'Nike shoes';
				break;
			case 2:
				this.mainBackground.setAttribute('style', 'background-color: rgba(61,76,93,0.2)');
				this.browseButton.setAttribute('style', 'background-color: #3D4C5D');
				this.mainHeader.innerText = 'Shoes';
				break;
			case 3:
				this.mainBackground.setAttribute('style', 'background-color: rgba(255,172,26,0.2)');
				this.browseButton.setAttribute('style', 'background-color: #FFAC1A');
				this.mainHeader.innerText = 'Sport shoes';
				break;
		}
	}

	setUnderlineToNav(index) {
		switch(index) {
			case 1:
				this.selectNikeShoes.className = 'selected';
				this.selectRegularShoes.className = '';
				this.selectSportShoes.className = '';
				break;
			case 2:
				this.selectRegularShoes.className = 'selected';
				this.selectNikeShoes.className = '';
				this.selectSportShoes.className = '';
				break;
			case 3:
				this.selectSportShoes.className = 'selected';
				this.selectNikeShoes.className = '';
				this.selectRegularShoes.className = '';
				break;
		}
	}

	showMobileMenu() {
		this.openMobileMenu.setAttribute('style', 'display: none;');
		this.closeMobileMenu.setAttribute('style', 'display: initial;');
		this.headerNavigation.setAttribute('style', 'display: flex;');
	}

	hideMobileMenu() {
		this.openMobileMenu.setAttribute('style', 'display: flex;');
		this.closeMobileMenu.setAttribute('style', 'display: none;');
		this.headerNavigation.setAttribute('style', 'display: none;');	
	}
}
