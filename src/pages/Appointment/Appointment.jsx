import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        // console.log(data);
      });
  }, []);

  // const saturday = appointments?.Saturday;
  // const sunday = appointments?.Sunday;
  // const monday = appointments?.Monday;
  // const tuesday = appointments?.Tuesday;
  // const wednesday = appointments?.Wednesday;
  // const thrusday = appointments?.Thursday;
  // const friday = appointments?.Friday;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const options = {
      weekday: "long",
      timeZone: "Asia/Dhaka",
      localeMatcher: "best fit",
      // timeZoneName: "short",
    };
    const dayName = selectedDate.toLocaleDateString("en-US", options);

    // const appointmentDays = appointments.${dayName};
    return dayName;
  };
  console.log(appointments);

  return (
    <div className="text-center my-4">
      <p>total: {appointments?.Sunday?.length}</p>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline={true}
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
};

export default Appointment;
