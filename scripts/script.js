let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let popupContainer = popup.querySelector('.popup__container'); 
let popupName = popup.querySelector('.popup__text_type_name'); 
let popupProfession = popup.querySelector('.popup__text_type_profession');

function openPopup () {
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

function closePopup () {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  popup.classList.remove('popup_opened');
}

popupContainer.addEventListener('submit', formSubmitHandler);