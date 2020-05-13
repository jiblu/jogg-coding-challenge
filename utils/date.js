// convert to MMM-DD-YYYY format
export const getFormattedDate = (d) => {
  var date = new Date(d)
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  var dd = date.getDate();
  var mmm = months[date.getMonth()]; 
  var yyyy = date.getFullYear();

  return `${mmm} ${dd} ${yyyy}`
}