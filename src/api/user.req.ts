const { VITE_API_URL } = import.meta.env

const USER_URL = VITE_API_URL + 'user';


export const userPost = async (user: {}, getToken: () => Promise<string>) => {

  try {
    const token = await getToken();
    const response = await fetch(`${USER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {

      const data = await response.json();
      return data;
    } else {
      console.error('Error updating user:', response.statusText);
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const putUser = async (user: {}, userId: string, getToken: () => Promise<string> ) => {
  

  try {
    const token = await getToken();
    const response = await fetch(`${USER_URL}/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {

      const data = await response.json();
      return data;
    } else {
      console.error('Error updating user:', response.statusText);
    }

  }catch (error) {
    console.error('Error updating user:', error);
  }
};
