// import necessary constants

const photosReducer = (state = null, action) => {
  /* {Insert Code Here} */
};

const profilePhoto = (state = null, action) => {
  switch (action.type) {
    case actions.UPDATE_PROFILE_PHOTO:
      return action.profilePhoto;
    default:
      return state;
  }
}
