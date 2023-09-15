import { urlAlbum, urlTrack, urlUser } from "../global";

export const userPost = async (user: {}, getToken: () => Promise<string>) => {

  try {
    const token = await getToken();
    const response = await fetch(`${urlUser}`, {
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

export const UserPatch = async (userUpdate: {}, userId: string, getToken: () => Promise<string>) => {
  try {
    const token = await getToken();
    const response: Response = await fetch(`${urlUser}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userUpdate),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorMessage = `Error updating user: ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const userDelete = async (userId: string, getToken: () => Promise<string>) => {
  try {
    const token = getToken()
    const response: Response = await fetch(`${urlUser}/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error deleting user: ${errorData.message}`);
    }

    return response;

  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export const userPlaylistsCreatedGet = async (userEmail: string, getToken: () => Promise<string>) => {
  try {
    const token = getToken()
    const response = await fetch(`${urlUser}/playlistCreated/${userEmail}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error connecting to DB: ${errorData.message}`);
    }

    const data = response.json();
    return data;

  } catch (error) {
    console.error('Error getting user playlists:', error);
    throw error;
  }
}

export const userPlaylistsLikedGet = async (userEmail: string, getToken: () => Promise<string>) => {
  try {
    const token = getToken()
    const response = await fetch(`${urlUser}/playlistLiked/${userEmail}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error connecting to DB: ${errorData.message}`);
    }

    const data = response.json();
    return data;

  } catch (error) {
    console.error('Error getting user playlists:', error);
    throw error;
  }
}

export const userAlbumsGet = async ( getToken: () => Promise<string>) => {
  try {
    const token = getToken()
    const response = await fetch(urlAlbum, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error connecting to DB: ${errorData.message}`);
    }

    const data = response.json();
    return data;

  } catch (error) {
    console.error('Error getting user albums:', error);
    throw error;
  }
}

export const userTracksGet = async ( getToken: () => Promise<string>) => {
  try {
    const token = getToken()
    const response = await fetch(urlTrack,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error connecting to DB: ${errorData.message}`);
    }

    const data = response.json();
    return data;

  } catch (error) {
    console.error('Error getting user tracks:', error);
    throw error;
  }
}