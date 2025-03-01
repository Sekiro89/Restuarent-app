import React, { useState } from 'react';

const BookingForm=(props)=>{
    const [date,setDate]=useState("");
    const [times,setTimes]=useState("");
    const [guests,setGuests]=useState("");
    const [occasion,setOcassion]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.submitForm(e)
    }
    const handleChange=(e)=>{
        setDate(e);
        props.dispatch(e)
    }
    return(
            <header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor='book-date'>choose date</label>
                                <input id='book-date' value={date} onChange={(e)=>handleChange(e.target.value)}type='date' required/>
                            </div>

                            <div>
                            </div>
                            <label htmlFor='book-item'>Choose Time</label>
                            <select id="book-time" value={times} onChange={(e)=>setTimes(e.target.value)}>
                                <option value="">Select a Time</option>{
                                    //props.availableTimes.availableTimes.map(availabelTimes=>{return <option key={availabelTimes}>{availabelTimes</option>})
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                            <div>
                                <label htmlFor='book-guests'>Number of Guests</label>
                                <input id="book-guests" min="1" value={guests} onChange={(e)=>setGuests(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor='book-occassion'>Occassion:</label>
                                <select id="book-occassion" key={occasion} value={occasion} onchange={e=> setOcassion(e.target.value)} val>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>
                            <div className="btnReceive">
                               <input aria-label='On Click' type="submit" value={"Make Your Reservation"}/>
                            </div>
                        </fieldset>

                    </form>
                </section>
            </header>
    );
};

export default BookingForm;