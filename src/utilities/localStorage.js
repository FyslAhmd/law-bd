const getAppointmentList = () => {
  const appointmentList = localStorage.getItem("appointment");
  if (appointmentList) {
    return JSON.parse(appointmentList);
  }
  return [];
};

const addToAppointmentList = (id) => {
  const appointmentList = getAppointmentList();
  if (appointmentList.includes(id)) {
    console.log("id already in bd");
  } else {
    appointmentList.push(id);
    localStorage.setItem("appointment", JSON.stringify(appointmentList));
  }
};

const removeFromAppointmentList = (id) => {
  const appointmentList = getAppointmentList();
  const newAppointmentList = appointmentList.filter((appId) => appId !== id);
  localStorage.setItem("appointment", JSON.stringify(newAppointmentList));
};

export { getAppointmentList, addToAppointmentList, removeFromAppointmentList };
