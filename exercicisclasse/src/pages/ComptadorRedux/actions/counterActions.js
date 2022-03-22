export const incrementaCounter = (amount) => {
  return {
    type: "INCREMENTA_COUNTER",
    payload: amount,
  };
};

export const decrementaCounter = (amount) => {
  return {
    type: "DECREMENTA_COUNTER",
    payload: amount,
  };
};

export const resetCounter = (amount) => {
  return {
    type: "RESET_COUNTER",
    payload: amount,
  };
};
