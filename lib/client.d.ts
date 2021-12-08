/// <reference types="node" />
import { EventEmitter } from 'events';
import { UpdateImagePayload } from './image';
import { GalleryOptions, SubredditGalleryOptions, SearchGalleryOptions } from './gallery';
import { AlbumData, Credentials, GalleryData, ImageData, ImgurApiResponse, Payload } from './common/types';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
export type { Credentials as ImgurCredentials, ImgurApiResponse, };
export declare class ImgurClient extends EventEmitter {
    readonly credentials: Credentials;
    private plainFetcher;
    private fetcher;
    constructor(credentials: Credentials);
    plainRequest(options: AxiosRequestConfig): Promise<AxiosResponse<unknown>>;
    request(options?: AxiosRequestConfig): Promise<AxiosResponse<unknown>>;
    deleteImage(imageHash: string): Promise<ImgurApiResponse<boolean>>;
    favoriteImage(imageHash: string): Promise<ImgurApiResponse<string>>;
    getAlbum(albumHash: string): Promise<ImgurApiResponse<AlbumData>>;
    getAlbums(account: string, page?: number): Promise<ImgurApiResponse<AlbumData[]>>;
    getAlbumsIds(account: string, page?: number): Promise<ImgurApiResponse<string[]>>;
    getGallery(options: GalleryOptions): Promise<ImgurApiResponse<GalleryData>>;
    getSubredditGallery(options: SubredditGalleryOptions): Promise<ImgurApiResponse<GalleryData>>;
    searchGallery(options: SearchGalleryOptions): Promise<ImgurApiResponse<GalleryData>>;
    getImage(imageHash: string): Promise<ImgurApiResponse<ImageData>>;
    updateImage(payload: UpdateImagePayload | UpdateImagePayload[]): Promise<ImgurApiResponse<boolean> | ImgurApiResponse<boolean>[]>;
    upload(payload: string | string[] | Payload | Payload[]): Promise<ImgurApiResponse<ImageData> | ImgurApiResponse<ImageData>[]>;
}
