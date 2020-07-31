import { Canvas as NodeCanvas, Image } from 'canvas';
import type { Canvas, LoadableImage } from './Canvas';
export declare const browser: boolean;
export declare const internalCanvas: any;
export declare const getFontHeight: (font: string) => any;
export declare const textWrap: (canvas: Canvas, text: string, wrapWidth: number) => string;
/**
 * Resolves an Image or Buffer
 * @param src An Image instance or a buffer
 * @param cb The callback
 */
export declare const resolveImage: (src: LoadableImage, options?: any) => Promise<NodeCanvas | Image>;
//# sourceMappingURL=Util.d.ts.map