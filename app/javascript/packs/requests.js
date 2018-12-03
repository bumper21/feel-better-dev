const BASE_URL = `http://localhost:3000/api/v1`;
const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/playlistItems`

const apiKey = `AIzaSyDG83HUAOx9kyRPjYT0_o7nBxHal2U-of8`
const playlistId= `PLVpJ_ku_DBpYQCtNK7pyuGW30kEbfC4bU`

export const Exercise = {
  one(id) {
    return fetch(`${BASE_URL}/exercises/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  random() {
    return fetch(`${BASE_URL}/exercise/random`, {
      credentials: "include"
    }).then(res => res.json());
  }
}

export const JournalEntry = {
  create(params) {
    return fetch(`${BASE_URL}/journal_entries`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include"
    }).then(res => res.json());
  }
};

