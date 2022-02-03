export const disablePreview = (url: string) =>
    // const pattern = /preview=[^\\&]+&?/;
    // return url.replace(pattern, '');
    `/api/exit-preview?redirectTo=${url}`;
