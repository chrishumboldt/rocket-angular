/**
 * @author Chris Humboldt
 */

/**
 * Extension list.
 */
export enum Extension {
   BMP = 'bmp',
   CSV = 'csv',
   DOC = 'doc',
   DOCX = 'docx',
   GIF = 'gif',
   JPG = 'jpg',
   JPEG = 'jpeg',
   JSON = 'json',
   PDF = 'pdf',
   PNG = 'png',
   TIF = 'tif',
   TIFF = 'tiff',
   TXT = 'txt',
   XLS = 'xls',
   XLSX = 'xlsx'
}
export const extensionList = Object.keys(Extension).map((key: string) => {
   return Extension[key];
});

/**
 * Images extension data.
 */
export enum ImageExtension {
   BMP = 'bmp',
   GIF = 'gif',
   JPG = 'jpg',
   JPEG = 'jpeg',
   PNG = 'png',
   TIF = 'tif',
   TIFF = 'tiff'
}
export const imageExtensionList = Object.keys(ImageExtension).map((key: string) => {
   return ImageExtension[key];
});
