import type { Canvas, LoadableImage } from './Canvas';
export declare const browser: boolean;
export declare type InternalCanvas = BrowserCanvas | SkiaCanvas | NodeCanvas;
export declare const mod: InternalCanvas;
export declare const getFontHeight: (font: string) => number;
export declare const textWrap: (canvas: Canvas, text: string, wrapWidth: number) => string;
/**
 * Resolves an Image or Buffer
 * @param src An Image instance or a buffer
 * @param cb The callback
 */
export declare const resolveImage: ((src: string, options?: Partial<HTMLImageElement> | undefined) => Promise<HTMLImageElement>) | ((src: LoadableImage, options?: any) => Promise<import("canvas").Image>);
export declare const registerFont: {
    (familyName: string, fontPaths: readonly string[]): import("skia-canvas").FontVariant[];
    (fontPaths: readonly string[]): import("skia-canvas").FontVariant[];
    (families: Record<string, string | readonly string[]>): Record<string, import("skia-canvas").FontVariant | import("skia-canvas").FontVariant[]>;
} | typeof import("canvas").registerFont;
/**
 * The names of the filters that take a string argument.
 */
declare type LiteralFilters = 'url';
export declare type Percentage<T extends number = number> = `${T}%`;
/**
 * The names of the filters that take a percentage argument.
 */
declare type PercentageFilters = 'brightness' | 'contrast' | 'grayscale' | 'invert' | 'opacity' | 'saturate' | 'sepia';
declare type RelativeLengthUnits = 'cap' | 'ch' | 'em' | 'ex' | 'ic' | 'lh' | 'rem' | 'rlh';
declare type RelativeUnits = RelativeLengthUnits | '%';
declare type ViewportPercentageUnits = 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
declare type AbsoluteLengthUnits = 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt';
declare type LengthUnits = RelativeUnits | ViewportPercentageUnits | AbsoluteLengthUnits;
export declare type Length<T extends number = number> = `${T}${LengthUnits}`;
/**
 * The names of the filters that take a length argument.
 */
declare type LengthFilters = 'blur';
declare type AngleUnits = 'deg' | 'grad' | 'rad' | 'turn';
export declare type Angle<T extends number = number> = `${T}${AngleUnits}`;
/**
 * The names of the filters that take an angle argument.
 */
declare type AngleFilters = 'hue-rotate';
export declare type Color = ColorKeyword | ColorHexadecimal | ColorRGB | ColorRGBA | ColorHSL | ColorHSLA;
interface Filter {
    <K extends LiteralFilters, V extends string>(name: K, url: V): `${K}(${V})`;
    <K extends PercentageFilters, V extends Percentage>(name: K, percentage: V): `${K}(${V})`;
    <K extends LengthFilters, V extends Length>(name: K, length: V): `${K}(${V})`;
    <K extends AngleFilters, V extends Angle>(name: K, angle: V): `${K}(${V})`;
    <Vx extends Length, Vy extends Length>(name: 'drop-shadow', x: Vx, y: Vy): `drop-shadow(${Vx} ${Vy})`;
    <Vx extends Length, Vy extends Length, Vb extends Length>(name: 'drop-shadow', x: Vx, y: Vy, blur: Vb): `drop-shadow(${Vx} ${Vy} ${Vb})`;
    <Vx extends Length, Vy extends Length, Vc extends Color>(name: 'drop-shadow', x: Vx, y: Vy, color: Vc): `drop-shadow(${Vx} ${Vy} ${Vc})`;
    <Vx extends Length, Vy extends Length, Vb extends Length, Vc extends Color>(name: 'drop-shadow', x: Vx, y: Vy, blur: Vb, color: Vc): `drop-shadow(${Vx} ${Vy} ${Vb} ${Vc})`;
    (value: 'none'): 'none';
}
export declare const filter: Filter;
/**
 * Represents a formatted hexadecimal value.
 */
export declare type ColorHexadecimal<T extends string = string> = `#${T}`;
/**
 * Utility to format an hexadecimal string into a CSS hexadecimal string.
 * @param hex The hexadecimal code.
 * @example
 * hex('FFF'); // -> '#FFF'
 * hex('0F0F0F'); // -> '#0F0F0F'
 */
export declare const hex: <T extends string>(hex: T) => `#${T}`;
/**
 * Represents a formatted RGB value.
 */
export declare type ColorRGB<R extends number = number, G extends number = number, B extends number = number> = `rgb(${R}, ${G}, ${B})`;
/**
 * Utility to format a RGB set of values into a string.
 * @param red The red value, must be a number between 0 and 255 inclusive.
 * @param green The green value, must be a number between 0 and 255 inclusive.
 * @param blue The blue value, must be a number between 0 and 255 inclusive.
 * @see https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation
 * @example
 * rgb(255, 150, 65); // -> 'rgb(255, 150, 65)'
 */
export declare const rgb: <R extends number, G extends number, B extends number>(red: R, green: G, blue: B) => `rgb(${R}, ${G}, ${B})`;
/**
 * Represents a formatted RGBA value.
 */
export declare type ColorRGBA<R extends number = number, G extends number = number, B extends number = number, A extends number = number> = `rgba(${R}, ${G}, ${B}, ${A})`;
/**
 * Utility to format a RGBA set of values into a string.
 * @param red The red value, must be a number between 0 and 255 inclusive.
 * @param green The green value, must be a number between 0 and 255 inclusive.
 * @param blue The blue value, must be a number between 0 and 255 inclusive.
 * @param alpha The alpha value, must be a number between 0 and 1 inclusive.
 * @see https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation
 * @example
 * rgba(255, 150, 65, 0.3); // -> 'rgba(255, 150, 65, 0.3)'
 */
export declare const rgba: <R extends number, G extends number, B extends number, A extends number>(red: R, green: G, blue: B, alpha: A) => `rgba(${R}, ${G}, ${B}, ${A})`;
/**
 * Represents a formatted HSL value.
 */
export declare type ColorHSL<H extends number = number, S extends number = number, L extends number = number> = `hsl(${H}, ${S}%, ${L}%)`;
/**
 * Utility to format a HSL set of values into a string.
 * @param hue The hue, must be a number between 0 and 360 inclusive.
 * @param saturation The saturation, must be a number between 0 and 100 inclusive.
 * @param lightness The lightness, must be a number between 0 and 100 inclusive, 0 will make it black, 100 will make it white.
 * @see https://en.wikipedia.org/wiki/HSL_and_HSV
 * @example
 * hsl(120, 100, 40); // -> 'hsl(120, 100, 40)'
 */
export declare const hsl: <H extends number, S extends number, L extends number>(hue: H, saturation: S, lightness: L) => `hsl(${H}, ${S}%, ${L}%)`;
/**
 * Represents a formatted HSL value.
 */
export declare type ColorHSLA<H extends number = number, S extends number = number, L extends number = number, A extends number = number> = `hsla(${H}, ${S}%, ${L}%, ${A})`;
/**
 * Utility to format a HSLA set of values into a string.
 * @param hue The hue, must be a number between 0 and 360 inclusive.
 * @param saturation The saturation, must be a number between 0 and 100 inclusive.
 * @param lightness The lightness, must be a number between 0 and 100 inclusive, 0 will make it black, 100 will make it white
 * @param alpha The alpha value, must be a number between 0 and 1 inclusive.
 * @see https://en.wikipedia.org/wiki/HSL_and_HSV
 * @example
 * hsla(120, 100, 40, 0.4); // -> 'hsla(120, 100, 40, 0.4)'
 */
export declare const hsla: <H extends number, S extends number, L extends number, A extends number>(hue: H, saturation: S, lightness: L, alpha: A) => `hsla(${H}, ${S}%, ${L}%, ${A})`;
/**
 * Utility to type-safely use CSS colors.
 * @param color The CSS keyword color.
 * @example
 * color('silver'); // ✔
 * color('some-imaginary-number'); // ❌
 */
export declare const color: (color: ColorKeyword) => ColorKeyword;
export declare type ColorKeyword = ColorKeywordLevel1 | ColorKeywordLevel2 | ColorKeywordLevel3 | ColorKeywordLevel4;
export declare type ColorKeywordLevel1 = 'black' | 'silver' | 'gray' | 'white' | 'maroon' | 'red' | 'purple' | 'fuchsia' | 'green' | 'lime' | 'olive' | 'yellow' | 'navy' | 'blue' | 'teal' | 'aqua';
export declare type ColorKeywordLevel2 = 'orange';
export declare type ColorKeywordLevel3 = 'aliceblue' | 'antiquewhite' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'blanchedalmond' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'limegreen' | 'linen' | 'magenta' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'oldlace' | 'olivedrab' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'whitesmoke' | 'yellowgreen';
export declare type ColorKeywordLevel4 = 'rebeccapurple';
export declare const enum CanvasType {
    Browser = 0,
    SkiaCanvas = 1,
    NodeCanvas = 2
}
export interface BrowserCanvas {
    type: CanvasType.Browser;
    module: typeof HTMLCanvasElement;
}
export declare namespace BrowserCanvas {
    type Canvas = HTMLCanvasElement;
    type Image = HTMLImageElement;
    type Context2D = CanvasRenderingContext2D;
    type registerFont = () => never;
}
export interface SkiaCanvas {
    type: CanvasType.SkiaCanvas;
    module: typeof import('skia-canvas');
}
export declare namespace SkiaCanvas {
    type Canvas = import('skia-canvas').Canvas;
    type Image = import('skia-canvas').Image;
    type Context2D = import('skia-canvas').CanvasRenderingContext2D;
    type registerFont = import('skia-canvas').FontLibrary['use'];
}
export interface NodeCanvas {
    type: CanvasType.NodeCanvas;
    module: typeof import('canvas');
}
export declare namespace NodeCanvas {
    type Canvas = import('canvas').Canvas;
    type Image = import('canvas').Image;
    type Context2D = import('canvas').CanvasRenderingContext2D;
    type registerFont = typeof import('canvas')['registerFont'];
}
export {};
//# sourceMappingURL=Util.d.ts.map