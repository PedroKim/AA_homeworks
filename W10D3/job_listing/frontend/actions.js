export const SWTICH_LOCATION = "SWITCH_LOCATION";
export const CLEAR_LISTINGS = "CLEAR_LISTINGS";

export const selectLocation = (city, jobs) => ({
  type: SWTICH_LOCATION,
  city: city,
  jobs: jobs
});

export const clearListings = () => ({
  type: CLEAR_LISTINGS
});

// export default selectLocation;
