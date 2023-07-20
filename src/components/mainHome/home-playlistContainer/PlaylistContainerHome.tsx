import {useContext} from 'react';
import {DataMusicContext} from '../../../context';

import SwiperCore from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {CardForPlaylistPlayerHome} from '../../cardForPlaylistHome/CardForPlaylistPlayerHome';
import { PlaylistContainerStyles } from './PlaylistContainer.Styles';

SwiperCore.use([Navigation, Pagination]);

export const PlaylistContainerHome = () => {
	const data = useContext(DataMusicContext);
	const playlists = data?.data?.playlists;

	console.log('renderiza el padre')

	return (
		<PlaylistContainerStyles>
			{playlists && (
				<Swiper navigation pagination slidesPerView={2} spaceBetween={5} modules={[Pagination]} className="mySwiper">
					{playlists.map(({id, thumbnail, name, description}) => (
						<SwiperSlide key={id}>
							<CardForPlaylistPlayerHome thumbnail={thumbnail} name={name} id={id} description={description} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</PlaylistContainerStyles>
	);
};
