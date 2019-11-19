const BASE_URL = process.env.BASE_URL;

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

