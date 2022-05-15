
const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescription = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');

console.log(tabImages);

// tabButtons.forEach((tabButton, index) => {
// 	tabButton.onclick = () => {
// 		console.log('click');
// 	}
// })

// ================================================

// повесить 2 обработчика

// tabButtons.forEach((tabButton, index) => {
// 	tabButton.addEventListener('click', (event) => {
// 		tabButtons.forEach((btn) => {
// 			console.log(btn);
// 			console.log(event.target);
// 			if (btn === event.target) {
// 				btn.classList.add('design-list__item_active')
// 			} else{
// 				btn.classList.remove('design-list__item_active')
// 			}

// 		 })    
// 	   })
// 	})

// ------------------------------
	
// чтобы скрыать и показывать блоки используем index 2 обработчика на кнопку 
//и показ скрытого текста

// tabButtons.forEach((tabButton, index) => {
// 	tabButton.addEventListener('click', (event) => {
// 		tabDescription.forEach((descr, indexDescr) => {   //перебираем коллекцию design__descr
// 			if (index === indexDescr){
// 				descr.classList.remove ('hidden')
// 				} else{
// 					descr.classList.add('hidden')
// 				}
// 		})
// 		// console.log(index);


// 		tabImages.forEach((image, indexImage) => {   //перебираем коллекцию фото
// 			if (index === indexImage){
// 				image.classList.remove ('hidden')
// 				} else{
// 					image.classList.add('hidden')
// 				}
// 		})

// 		tabButtons.forEach((btn) => {
// 			if (btn === event.target) {
// 				btn.classList.add('design-list__item_active')
// 			} else{
// 				btn.classList.remove('design-list__item_active')
// 			}

// 		 })    
// 	   })
// 	})

// ===============Используем data атрибуты==========================

// tabButtons.forEach((tabButton, index) => {
// 	tabButton.addEventListener('click', (event) => {
// 		const dataValue = tabButton.dataset.tabsHandler

// 		tabDescription.forEach((descr) => {   //перебираем коллекцию design__descr
// 			if (descr.dataset.tabsField === dataValue){
// 				descr.classList.remove ('hidden')
// 				} else {
// 					descr.classList.add('hidden')
// 				}
// 		})
		
// 		tabImages.forEach((image) => {   //перебираем коллекцию фото
// 			if (image.dataset.tabsField === dataValue){
// 				image.classList.remove ('hidden')
// 				} else{
// 					image.classList.add('hidden')
// 				}
// 		})

// 		tabButtons.forEach((btn) => {
// 			if (btn === event.target) {
// 				btn.classList.add('design-list__item_active')
// 			} else{
// 				btn.classList.remove('design-list__item_active')
// 			}

// 		 })    
// 	   })
// 	})


// ===============Используем data атрибуты==========================



// ====================================================================

const  changeContent = (array, value) => {
array.forEach((elem) => {   //перебираем коллекцию фото
			if (elem.dataset.tabsField === value){
				elem.classList.remove ('hidden')
				} else{
					elem.classList.add('hidden')
				}
		})
}

tabButtons.forEach((tabButton) => {
	tabButton.addEventListener('click', (event) => {
		const dataValue = tabButton.dataset.tabsHandler

		

		changeContent(tabDescription, dataValue)
		changeContent(tabImages, dataValue)


		tabButtons.forEach((btn) => {
			if (btn === event.target) {
				btn.classList.add('design-list__item_active')
			} else{
				btn.classList.remove('design-list__item_active')
			}

		 })    
	   })
	 })