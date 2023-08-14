import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';

function BookALesson() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (
        <>
            <section className="bookalesson__wrapper">
            <div className="calendar-container">
                <Calendar onClickDay={handleDateClick} value={selectedDate} />
            </div>
            {isFormOpen && (
                <div className="form-container">
                    <div className="close-btn" onClick={handleCloseForm}>
                        X
                    </div>
                    <h2>Umów zajęcia online na {selectedDate.toLocaleDateString()}</h2>
                    <form>
                        {/* formularz do umawiania zajęć */}
                    </form>
                </div>
            )}
            </section>
        </>
    );
}

export default BookALesson;