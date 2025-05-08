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
    return 0;
  } else {
    appointmentList.push(id);
    localStorage.setItem("appointment", JSON.stringify(appointmentList));
    return 1;
  }
};

const removeFromAppointmentList = (id) => {
  const appointmentList = getAppointmentList();
  const newAppointmentList = appointmentList.filter((appId) => appId !== id);
  localStorage.setItem("appointment", JSON.stringify(newAppointmentList));
};

export { getAppointmentList, addToAppointmentList, removeFromAppointmentList };
