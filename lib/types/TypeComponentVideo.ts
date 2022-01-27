import * as Contentful from 'contentful';

export interface TypeComponentVideoFields {
    title?: Contentful.EntryFields.Symbol;
    file?: {
        url: string;
    };
    youtubeVideoId: Contentful.EntryFields.Symbol;
}

export type TypeComponentVideo = Contentful.Entry<TypeComponentVideoFields>;
