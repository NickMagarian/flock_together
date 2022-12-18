import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import EventsList from '../components/EventsList';
import EventForm from '../components/EventForm';

import { QUERY_SINGLE_user } from '../utils/queries';

const User = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {user.name}'s friends have endorsed these Events...
      </h2>

      {user.events?.length > 0 && <EventsList events={user.events} />}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <EventForm userId={user._id} />
      </div>
    </div>
  );
};

export default User;
