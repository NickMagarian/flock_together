import React from 'react';

const EventsList = ({ events }) => {
  if (!events.length) {
    return <h3>No events Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {events &&
          events.map((event) => (
            <div key={event} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {event} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventsList;
