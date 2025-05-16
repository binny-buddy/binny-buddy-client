/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  BinnyBuddyAppsCoreViewsBinnyData,
  BinnyBuddyAppsCoreViewsBinnyPatchData,
  BinnyBuddyAppsCoreViewsCollectionData,
  BinnyBuddyAppsCoreViewsFileData,
  BinnyBuddyAppsCoreViewsHomeData,
  BinnyBuddyAppsCoreViewsRequestRewardData,
  BinnyBuddyAppsCoreViewsRequestRewardPayload,
  BinnyBuddyAppsCoreViewsRewardHistoryData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ApiPublic<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name BinnyBuddyAppsCoreViewsHome
   * @summary Home
   * @request GET:/api-public/v1/home
   * @secure
   * @response `200` `BinnyBuddyAppsCoreViewsHomeData` OK
   */
  binnyBuddyAppsCoreViewsHome = (params: RequestParams = {}) =>
    this.request<BinnyBuddyAppsCoreViewsHomeData, any>({
      path: `/api-public/v1/home`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name BinnyBuddyAppsCoreViewsRequestReward
   * @summary Request Reward
   * @request POST:/api-public/v1/request-reward
   * @secure
   * @response `200` `BinnyBuddyAppsCoreViewsRequestRewardData` OK
   */
  binnyBuddyAppsCoreViewsRequestReward = (
    data: BinnyBuddyAppsCoreViewsRequestRewardPayload,
    params: RequestParams = {},
  ) =>
    this.request<BinnyBuddyAppsCoreViewsRequestRewardData, any>({
      path: `/api-public/v1/request-reward`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name BinnyBuddyAppsCoreViewsRewardHistory
   * @summary Reward History
   * @request GET:/api-public/v1/reward-history/{reward_history_id}
   * @secure
   * @response `200` `BinnyBuddyAppsCoreViewsRewardHistoryData` OK
   */
  binnyBuddyAppsCoreViewsRewardHistory = (
    rewardHistoryId: number,
    params: RequestParams = {},
  ) =>
    this.request<BinnyBuddyAppsCoreViewsRewardHistoryData, any>({
      path: `/api-public/v1/reward-history/${rewardHistoryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name BinnyBuddyAppsCoreViewsFile
   * @summary File
   * @request GET:/api-public/v1/file/{file_id}
   * @secure
   * @response `200` `BinnyBuddyAppsCoreViewsFileData` OK
   */
  binnyBuddyAppsCoreViewsFile = (fileId: string, params: RequestParams = {}) =>
    this.request<BinnyBuddyAppsCoreViewsFileData, any>({
      path: `/api-public/v1/file/${fileId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name BinnyBuddyAppsCoreViewsCollection
   * @summary Collection
   * @request GET:/api-public/v1/collection/{collection_id}
   * @secure
   * @response `200` `BinnyBuddyAppsCoreViewsCollectionData` OK
   */
  binnyBuddyAppsCoreViewsCollection = (
    collectionId: number,
    params: RequestParams = {},
  ) =>
    this.request<BinnyBuddyAppsCoreViewsCollectionData, any>({
      path: `/api-public/v1/collection/${collectionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name BinnyBuddyAppsCoreViewsBinny
   * @summary Binny
   * @request GET:/api-public/v1/binny/{binny_id}
   * @secure
   * @response `200` `BinnyBuddyAppsCoreViewsBinnyData` OK
   */
  binnyBuddyAppsCoreViewsBinny = (
    binnyId: number,
    params: RequestParams = {},
  ) =>
    this.request<BinnyBuddyAppsCoreViewsBinnyData, any>({
      path: `/api-public/v1/binny/${binnyId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name BinnyBuddyAppsCoreViewsBinnyPatch
   * @summary Binny Patch
   * @request PATCH:/api-public/v1/binny/{binny_id}
   * @secure
   * @response `200` `BinnyBuddyAppsCoreViewsBinnyPatchData` OK
   */
  binnyBuddyAppsCoreViewsBinnyPatch = (
    binnyId: number,
    query: {
      /** Name */
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BinnyBuddyAppsCoreViewsBinnyPatchData, any>({
      path: `/api-public/v1/binny/${binnyId}`,
      method: "PATCH",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
