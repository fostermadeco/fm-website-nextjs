import has from 'lodash.has';
import { Document, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Hyperlink } from './hyperlink';

export const isRichText = (x: Document | unknown): x is Document =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ['data', 'content', 'nodeType'].every((prop) => has(x, prop));

const PlainHyperlink = (props: any) => <Hyperlink {...props} type="PlainLink" />;
const AssetHyperlink = (props: any) => <Hyperlink {...props} type="AssetLink" />;

export const renderRichText = (rtd: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    documentToReactComponents(rtd, {
        renderNode: {
            [INLINES.HYPERLINK]: PlainHyperlink,
            [INLINES.ASSET_HYPERLINK]: AssetHyperlink,
            [INLINES.ENTRY_HYPERLINK]: () => null, // Ignore entry hyperlink
        },
    });
