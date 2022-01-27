/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import noop from 'lodash.noop';
import { NodeRenderer } from '@contentful/rich-text-react-renderer';
import Video from '../../components/renderer/Video';
import ImageRichText from '../../components/renderer/ImageRichText';

export const EmbeddedAsset = (({
    data: {
        target: { sys, fields, metadata },
    },
}) => {
    const isVideo = fields.file.contentType.includes('video');
    if (isVideo) {
        return (
            <Video
                sys={sys}
                // Change fields format to what <Image /> expects
                fields={fields}
                toPlainObject={noop as any}
                update={noop as any}
                metadata={metadata}
            />
        );
    }

    const isImage = fields.file.contentType.includes('image');
    if (isImage) {
        return (
            <ImageRichText
                sys={sys}
                // Change fields format to what <Image /> expects
                fields={{
                    title: fields.title,
                    image: { fields } as any,
                }}
                toPlainObject={noop as any}
                update={noop as any}
                metadata={metadata}
            />
        );
    }

    // Ignore all other asset types, e.g. PDFs, other docs etc.
    return null;
}) as NodeRenderer;
