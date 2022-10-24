import { party } from '../helpers/axiosParty';

export const getParties = () => {
  return party.get('/party');
};

export const getParty = (id) => {
  return party.get(`/party/party-details?id=${id}`);
};
