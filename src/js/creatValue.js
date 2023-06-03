export function creatValue(evt) {
  const data ={}
  new FormData(evt.currentTarget).forEach((value, name) => {
    data[name] = value.trim()
  });
  return data
}