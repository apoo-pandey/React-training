const add = (newCity) => ({ type: "add", payload: newCity });

const del = (index) => ({ type: "delete", payload: index });

const reset = () => ({ type: "reset" });

const show = () => ({ type: "show" });

export { add, del, reset, show };
