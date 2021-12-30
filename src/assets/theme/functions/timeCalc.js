
function findDayDifference(published) {
  if (published != undefined) {
    const date1 = new Date(published);
    const date2 = new Date();

    const difference = (Math.abs(date2-date1))
    let diff = Math.floor(difference/(1000*60*60*24))
    if (diff > 0) {
      return diff + " día" + (diff > 1 ? "s" : "")
    } else {
      diff = Math.floor(difference/(1000*60*60))
      if (diff > 0) {
        return diff + " hora" + (diff > 1 ? "s" : "")
      } else {
        diff = Math.floor(difference/(1000*60))
        return diff + " minuto"  + (diff > 1 ? "s" : "")
      }
    }
  }
  return "0 segundos";
}

export default findDayDifference;
