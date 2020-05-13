// convert to MMM-DD-YYYY format
export const getFormattedDate = (d) => {
  var date = new Date(d)
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  var dd = date.getDate();
  var mmmm = months[date.getMonth()]; 
  var yyyy = date.getFullYear();

  return `${mmmm} ${dd}, ${yyyy}`
}