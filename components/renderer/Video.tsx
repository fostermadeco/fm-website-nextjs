import React from 'react';
import ReactPlayer from 'react-player';

import { TypeComponentVideo } from '../../lib/types';

const styles = {
    container: {
        paddingBottom: '56.25%', // 16/9 ratio
    },
};

const Video = ({ fields }: TypeComponentVideo) => {
    const { title, youtubeVideoId } = fields;

    const url = youtubeVideoId ? `https://www.youtube.com/embed/${youtubeVideoId}` : fields.file?.url;

    return (
        <div className="flex flex-col w-full mt-8 lg:mb-12">
            <div className="relative items-center w-full h-0 overflow-hidden" style={styles.container}>
                <ReactPlayer style={{ position: 'absolute' }} width="100%" height="100%" controls url={url} />
            </div>
            <span className="py-4 text-center text-gray-700">{title}</span>
        </div>
    );
};

export default Video;
