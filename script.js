let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupClose = popup.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let popupContainer = popup.querySelector('.popup__container'); 
let popupName = popup.querySelector('.popup__text_name'); 
let popupProfession = popup.querySelector('.popup__text_profession');

editButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
})

popupClose.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  popup.classList.remove('popup_opened');
}

popupContainer.addEventListener('submit', formSubmitHandler);