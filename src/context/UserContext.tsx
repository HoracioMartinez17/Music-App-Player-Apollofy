import { createContext, FC, useState, ReactNode, useContext, useEffect } from 'react';
import { userPost, UserPatch, userDelete, userGet, UserPatchLiked } from '../api/user.fetch'
import { User, useAuth0 } from '@auth0/auth0-react'

// interface UserDates {
// 	id: String;
// 	userEmail: String;
// 	userName: String;
// 	userImage: String;
// 	userCreatedAt: String;
// 	userUpdatedAt: String;
// 	playlistLikedId: String[];
// 	playlistLiked: Playlist[];
// 	tracksId: String[];
// 	tracks: Track[];
// 	postId: String[];
// 	post: Post[];
// 	albumId: String[];
// 	album: Album[];
// 	playlistCreatedId: String[];
// 	playlistCreated: Playlist[];
// }

interface userData {
    id?: string | null;
    userEmail: string;
    userName: string;
    userImage?: string;
    playlistLikedId: string[];
    playlistCreatedId: string[];
    albumId: string[];
    tracksId: string[];
}
interface UserContextType {
    userData: userData | null
    // userUpdateData: Response | null
    handleUserData: (id: string, dataType: string) => void
    deleteUser: (userId: string, getAccessTokenSilently: () => Promise<string>) => Promise<Response>
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userData, setUserData] = useState<userData | null>(null);


    useEffect(() => {
        if (isAuthenticated) {
            async function userGetLauncher() {
                await getUserData(user?.email ?? '');
            }
            userGetLauncher();
        }
    }, [isAuthenticated])


    const getUserData = async (userEmail: string) => {
        if (user) {
            const userResponse = await userGet(userEmail, getAccessTokenSilently);
            setUserData(userResponse)
        }
    }
    const handleUserData = async (id: string, dataType: string) => {

        try {

            let newUserData = userData

            if (dataType === "track") {
                const index = userData?.tracksId.findIndex(trackId => trackId === id);

                if (index !== -1 && newUserData) {
                    const filterTrackId = newUserData.tracksId.filter(trackId => trackId !== id)
                    newUserData.tracksId = filterTrackId
                } else if (index === -1 && newUserData) {
                    console.log('entra al push')
                    newUserData.tracksId.push(id)
                }
                setUserData(newUserData)
            } else if (dataType === "album") {
                const index = userData?.albumId.findIndex(albumId => albumId === id);

                if (index !== -1 && newUserData) {
                    const filterAlbumId = newUserData.albumId.filter(albumId => albumId !== id)
                    newUserData.albumId = filterAlbumId
                } else if (index === -1 && newUserData) {
                    newUserData.albumId.push(id)
                }
                setUserData(newUserData)

            } else if (dataType === "playlist") {
                const index = userData?.playlistLikedId.findIndex(playlistId => playlistId === id);

                if (index !== -1 && newUserData) {
                    const filterPlaylistLikedId = newUserData.playlistLikedId.filter(playlistId => playlistId !== id)
                    newUserData.playlistLikedId = filterPlaylistLikedId
                } else if (index === -1 && newUserData) {
                    newUserData.playlistLikedId.push(id)
                }
                setUserData(newUserData)
            }

            await UserPatchLiked(
                userData?.tracksId ?? [],
                userData?.albumId ?? [],
                userData?.playlistLikedId ?? [],
                userData?.userEmail ?? "",
                getAccessTokenSilently);

        } catch (error) {
            console.error('Error user update:', error);
            throw error;
        }
    }


    const deleteUser = async (userId: string, getAccessTokenSilently: () => Promise<string>): Promise<Response> => {
        try {
            const responseDelete = await userDelete(userId, getAccessTokenSilently);
            return responseDelete;

        } catch (error) {
            console.error('Error user Delete:', error);
            throw error;
        }
    }


    return (<UserContext.Provider value={{ userData, handleUserData, deleteUser }}>
        {children}
    </UserContext.Provider>);
};

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext debe ser usado dentro de un UserProvider');
    }
    return context;
};
