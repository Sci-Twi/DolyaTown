export const eventsList = {

};

export const events = {
  register,
};

function register(event) {
  eventsList[event] = true;
}