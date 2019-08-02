function transformDate(date){
  date = new Date(date).toString().split(" ");
  return `${date[2]} de ${date[1]}, ${date[3]}`
}

export default {
  transformDate
}