import React from "react";
import '../Styles/Event.css'

const Events = () => {
  return (
    <section className="events-container" id="event">
        <div class="head">OUR EVENTS</div>
      <h2 className="events-title">Join Us for Hackathons, Workshops, and More</h2>
      <div className="events-cards">
        <div className="">
          <div className="event-card">
          <div className="event-status">Ended</div>
          </div>
          <div className="event-words">
          <h3>Youth Code Camp Hackathon</h3>
          <p>This event was designed to bring together young programmers for a day of collaborative coding and innovation.</p>
          <button className="read-more">Read more</button>
        </div>
        </div>
        <div className="">
          <div className="event-card">
          <div className="event-status">Ended</div>
          </div>
          <div className="event-words">
          <h3>ZacodeCraft</h3>
          <p>ZacodeCraft is a fun pizza party hosted by Youth Code Camp. It's a chance for everyone to enjoy great pizza, and hang out with fellow coders.</p>
          <button className="read-more">Read more</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

// injyari