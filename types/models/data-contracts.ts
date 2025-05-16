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

/** BinnyTypeEnum */
export enum BinnyTypeEnum {
  Cup = "cup",
  Bottle = "bottle",
  Container = "container",
}

/** BinnySchema */
export interface BinnySchema {
  /** Id */
  id: number;
  binny_type: BinnyTypeEnum;
  /** Name */
  name: string;
  /** Xp */
  xp: number;
  /** Level */
  level: number;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
  /** Reward Count */
  reward_count: number;
}

/** BinnyUserSchema */
export interface BinnyUserSchema {
  /** Id */
  id: number;
  /** Username */
  username: string;
}

/** DetectionResultSchema */
export interface DetectionResultSchema {
  /** Is Clean */
  is_clean: boolean;
  /** Confidence */
  confidence: number;
  binny_type: BinnyTypeEnum;
  /** How To Recycle */
  how_to_recycle?: string | null;
}

/** HomeSchema */
export interface HomeSchema {
  user: BinnyUserSchema;
  /** Collection Id */
  collection_id: number;
  /** Recent Reward Histories */
  recent_reward_histories: RewardHistorySchema[];
}

/** RewardHistorySchema */
export interface RewardHistorySchema {
  /** Id */
  id: number;
  user: BinnyUserSchema;
  /**
   * File Id
   * @format uuid
   */
  file_id: string;
  detection_result: DetectionResultSchema | null;
  binny: BinnySchema | null;
  /** Is Binny Created */
  is_binny_created: boolean | null;
  /** Earned Xp */
  earned_xp: number | null;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
  /** Is Level Up */
  is_level_up: boolean | null;
}

/** FileSchema */
export interface FileSchema {
  /**
   * Uuid
   * @format uuid
   */
  uuid: string;
  /** Name */
  name: string;
  /** Content Type */
  content_type: string;
  /** Data */
  data: string;
}

/** BinnyCollectionSchema */
export interface BinnyCollectionSchema {
  /** Id */
  id: number;
  /** Binny List */
  binny_list: BinnySchema[];
}

export type BinnyBuddyAppsCoreViewsHomeData = HomeSchema;

/** FileParams */
export interface BinnyBuddyAppsCoreViewsRequestRewardPayload {
  /**
   * File
   * @format binary
   */
  file: File;
}

export type BinnyBuddyAppsCoreViewsRequestRewardData = RewardHistorySchema;

export type BinnyBuddyAppsCoreViewsRewardHistoryData = RewardHistorySchema;

export type BinnyBuddyAppsCoreViewsFileData = FileSchema;

export type BinnyBuddyAppsCoreViewsCollectionData = BinnyCollectionSchema;

export type BinnyBuddyAppsCoreViewsBinnyData = BinnySchema;

export type BinnyBuddyAppsCoreViewsBinnyPatchData = BinnySchema;
