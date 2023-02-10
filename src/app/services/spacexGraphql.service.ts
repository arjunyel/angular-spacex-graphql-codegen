import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  uuid: any,
  timestamptz: any,
  ObjectID: any,
};





export type Address = {
   __typename?: 'Address',
  address?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
};

export type Capsule = {
   __typename?: 'Capsule',
  dragon?: Maybe<Dragon>,
  id?: Maybe<Scalars['ID']>,
  landings?: Maybe<Scalars['Int']>,
  missions?: Maybe<Array<Maybe<CapsuleMission>>>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type CapsuleMission = {
   __typename?: 'CapsuleMission',
  flight?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type CapsulesFind = {
  id?: Maybe<Scalars['ID']>,
  landings?: Maybe<Scalars['Int']>,
  mission?: Maybe<Scalars['String']>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

export type Core = {
   __typename?: 'Core',
  asds_attempts?: Maybe<Scalars['Int']>,
  asds_landings?: Maybe<Scalars['Int']>,
  block?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  missions?: Maybe<Array<Maybe<CapsuleMission>>>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  rtls_attempts?: Maybe<Scalars['Int']>,
  rtls_landings?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  water_landing?: Maybe<Scalars['Boolean']>,
};

export type CoreMission = {
   __typename?: 'CoreMission',
  flight?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type CoresFind = {
  asds_attempts?: Maybe<Scalars['Int']>,
  asds_landings?: Maybe<Scalars['Int']>,
  block?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  missions?: Maybe<Scalars['String']>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  rtls_attempts?: Maybe<Scalars['Int']>,
  rtls_landings?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  water_landing?: Maybe<Scalars['Boolean']>,
};


export type Distance = {
   __typename?: 'Distance',
  feet?: Maybe<Scalars['Float']>,
  meters?: Maybe<Scalars['Float']>,
};

export type Dragon = {
   __typename?: 'Dragon',
  active?: Maybe<Scalars['Boolean']>,
  crew_capacity?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  diameter?: Maybe<Distance>,
  dry_mass_kg?: Maybe<Scalars['Int']>,
  dry_mass_lb?: Maybe<Scalars['Int']>,
  first_flight?: Maybe<Scalars['String']>,
  heat_shield?: Maybe<DragonHeatShield>,
  height_w_trunk?: Maybe<Distance>,
  id?: Maybe<Scalars['ID']>,
  launch_payload_mass?: Maybe<Mass>,
  launch_payload_vol?: Maybe<Volume>,
  name?: Maybe<Scalars['String']>,
  orbit_duration_yr?: Maybe<Scalars['Int']>,
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>,
  return_payload_mass?: Maybe<Mass>,
  return_payload_vol?: Maybe<Volume>,
  sidewall_angle_deg?: Maybe<Scalars['Float']>,
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>,
  trunk?: Maybe<DragonTrunk>,
  type?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type DragonHeatShield = {
   __typename?: 'DragonHeatShield',
  dev_partner?: Maybe<Scalars['String']>,
  material?: Maybe<Scalars['String']>,
  size_meters?: Maybe<Scalars['Float']>,
  temp_degrees?: Maybe<Scalars['Int']>,
};

export type DragonPressurizedCapsule = {
   __typename?: 'DragonPressurizedCapsule',
  payload_volume?: Maybe<Volume>,
};

export type DragonThrust = {
   __typename?: 'DragonThrust',
  amount?: Maybe<Scalars['Int']>,
  fuel_1?: Maybe<Scalars['String']>,
  fuel_2?: Maybe<Scalars['String']>,
  pods?: Maybe<Scalars['Int']>,
  thrust?: Maybe<Force>,
  type?: Maybe<Scalars['String']>,
};

export type DragonTrunk = {
   __typename?: 'DragonTrunk',
  cargo?: Maybe<DragonTrunkCargo>,
  trunk_volume?: Maybe<Volume>,
};

export type DragonTrunkCargo = {
   __typename?: 'DragonTrunkCargo',
  solar_array?: Maybe<Scalars['Int']>,
  unpressurized_cargo?: Maybe<Scalars['Boolean']>,
};

export type Force = {
   __typename?: 'Force',
  kN?: Maybe<Scalars['Float']>,
  lbf?: Maybe<Scalars['Float']>,
};

export type HistoriesResult = {
   __typename?: 'HistoriesResult',
  data?: Maybe<Array<Maybe<History>>>,
  result?: Maybe<Result>,
};

export type History = {
   __typename?: 'History',
  details?: Maybe<Scalars['String']>,
  event_date_unix?: Maybe<Scalars['Date']>,
  event_date_utc?: Maybe<Scalars['Date']>,
  flight?: Maybe<Launch>,
  id?: Maybe<Scalars['ID']>,
  links?: Maybe<Link>,
  title?: Maybe<Scalars['String']>,
};

export type HistoryFind = {
  end?: Maybe<Scalars['Date']>,
  flight_number?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  start?: Maybe<Scalars['Date']>,
};

export type Info = {
   __typename?: 'Info',
  ceo?: Maybe<Scalars['String']>,
  coo?: Maybe<Scalars['String']>,
  cto?: Maybe<Scalars['String']>,
  cto_propulsion?: Maybe<Scalars['String']>,
  employees?: Maybe<Scalars['Int']>,
  founded?: Maybe<Scalars['Int']>,
  founder?: Maybe<Scalars['String']>,
  headquarters?: Maybe<Address>,
  launch_sites?: Maybe<Scalars['Int']>,
  links?: Maybe<InfoLinks>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  test_sites?: Maybe<Scalars['Int']>,
  valuation?: Maybe<Scalars['Float']>,
  vehicles?: Maybe<Scalars['Int']>,
};

export type InfoLinks = {
   __typename?: 'InfoLinks',
  elon_twitter?: Maybe<Scalars['String']>,
  flickr?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
};

export type Landpad = {
   __typename?: 'Landpad',
  attempted_landings?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  full_name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  landing_type?: Maybe<Scalars['String']>,
  location?: Maybe<Location>,
  status?: Maybe<Scalars['String']>,
  successful_landings?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type Launch = {
   __typename?: 'Launch',
  details?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  is_tentative?: Maybe<Scalars['Boolean']>,
  launch_date_local?: Maybe<Scalars['Date']>,
  launch_date_unix?: Maybe<Scalars['Date']>,
  launch_date_utc?: Maybe<Scalars['Date']>,
  launch_site?: Maybe<LaunchSite>,
  launch_success?: Maybe<Scalars['Boolean']>,
  launch_year?: Maybe<Scalars['String']>,
  links?: Maybe<LaunchLinks>,
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>,
  mission_name?: Maybe<Scalars['String']>,
  rocket?: Maybe<LaunchRocket>,
  ships?: Maybe<Array<Maybe<Ship>>>,
  static_fire_date_unix?: Maybe<Scalars['Date']>,
  static_fire_date_utc?: Maybe<Scalars['Date']>,
  telemetry?: Maybe<LaunchTelemetry>,
  tentative_max_precision?: Maybe<Scalars['String']>,
  upcoming?: Maybe<Scalars['Boolean']>,
};

export type LaunchesPastResult = {
   __typename?: 'LaunchesPastResult',
  data?: Maybe<Array<Maybe<Launch>>>,
  result?: Maybe<Result>,
};

export type LaunchFind = {
  apoapsis_km?: Maybe<Scalars['Float']>,
  block?: Maybe<Scalars['Int']>,
  cap_serial?: Maybe<Scalars['String']>,
  capsule_reuse?: Maybe<Scalars['String']>,
  core_flight?: Maybe<Scalars['Int']>,
  core_reuse?: Maybe<Scalars['String']>,
  core_serial?: Maybe<Scalars['String']>,
  customer?: Maybe<Scalars['String']>,
  eccentricity?: Maybe<Scalars['Float']>,
  end?: Maybe<Scalars['Date']>,
  epoch?: Maybe<Scalars['Date']>,
  fairings_recovered?: Maybe<Scalars['String']>,
  fairings_recovery_attempt?: Maybe<Scalars['String']>,
  fairings_reuse?: Maybe<Scalars['String']>,
  fairings_reused?: Maybe<Scalars['String']>,
  fairings_ship?: Maybe<Scalars['String']>,
  gridfins?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  inclination_deg?: Maybe<Scalars['Float']>,
  land_success?: Maybe<Scalars['String']>,
  landing_intent?: Maybe<Scalars['String']>,
  landing_type?: Maybe<Scalars['String']>,
  landing_vehicle?: Maybe<Scalars['String']>,
  launch_date_local?: Maybe<Scalars['Date']>,
  launch_date_utc?: Maybe<Scalars['Date']>,
  launch_success?: Maybe<Scalars['String']>,
  launch_year?: Maybe<Scalars['String']>,
  legs?: Maybe<Scalars['String']>,
  lifespan_years?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Scalars['String']>,
  mean_motion?: Maybe<Scalars['Float']>,
  mission_id?: Maybe<Scalars['String']>,
  mission_name?: Maybe<Scalars['String']>,
  nationality?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Scalars['Int']>,
  orbit?: Maybe<Scalars['String']>,
  payload_id?: Maybe<Scalars['String']>,
  payload_type?: Maybe<Scalars['String']>,
  periapsis_km?: Maybe<Scalars['Float']>,
  period_min?: Maybe<Scalars['Float']>,
  raan?: Maybe<Scalars['Float']>,
  reference_system?: Maybe<Scalars['String']>,
  regime?: Maybe<Scalars['String']>,
  reused?: Maybe<Scalars['String']>,
  rocket_id?: Maybe<Scalars['String']>,
  rocket_name?: Maybe<Scalars['String']>,
  rocket_type?: Maybe<Scalars['String']>,
  second_stage_block?: Maybe<Scalars['String']>,
  semi_major_axis_km?: Maybe<Scalars['Float']>,
  ship?: Maybe<Scalars['String']>,
  side_core1_reuse?: Maybe<Scalars['String']>,
  side_core2_reuse?: Maybe<Scalars['String']>,
  site_id?: Maybe<Scalars['String']>,
  site_name_long?: Maybe<Scalars['String']>,
  site_name?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Date']>,
  tbd?: Maybe<Scalars['String']>,
  tentative_max_precision?: Maybe<Scalars['String']>,
  tentative?: Maybe<Scalars['String']>,
};

export type LaunchLinks = {
   __typename?: 'LaunchLinks',
  article_link?: Maybe<Scalars['String']>,
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>,
  mission_patch?: Maybe<Scalars['String']>,
  mission_patch_small?: Maybe<Scalars['String']>,
  presskit?: Maybe<Scalars['String']>,
  reddit_campaign?: Maybe<Scalars['String']>,
  reddit_launch?: Maybe<Scalars['String']>,
  reddit_media?: Maybe<Scalars['String']>,
  reddit_recovery?: Maybe<Scalars['String']>,
  video_link?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type Launchpad = {
   __typename?: 'Launchpad',
  attempted_launches?: Maybe<Scalars['Int']>,
  details?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  location?: Maybe<Location>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  successful_launches?: Maybe<Scalars['Int']>,
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type LaunchRocket = {
   __typename?: 'LaunchRocket',
  fairings?: Maybe<LaunchRocketFairings>,
  first_stage?: Maybe<LaunchRocketFirstStage>,
  rocket?: Maybe<Rocket>,
  rocket_name?: Maybe<Scalars['String']>,
  rocket_type?: Maybe<Scalars['String']>,
  second_stage?: Maybe<LaunchRocketSecondStage>,
};

export type LaunchRocketFairings = {
   __typename?: 'LaunchRocketFairings',
  recovered?: Maybe<Scalars['Boolean']>,
  recovery_attempt?: Maybe<Scalars['Boolean']>,
  reused?: Maybe<Scalars['Boolean']>,
  ship?: Maybe<Scalars['String']>,
};

export type LaunchRocketFirstStage = {
   __typename?: 'LaunchRocketFirstStage',
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>,
};

export type LaunchRocketFirstStageCore = {
   __typename?: 'LaunchRocketFirstStageCore',
  block?: Maybe<Scalars['Int']>,
  core?: Maybe<Core>,
  flight?: Maybe<Scalars['Int']>,
  gridfins?: Maybe<Scalars['Boolean']>,
  land_success?: Maybe<Scalars['Boolean']>,
  landing_intent?: Maybe<Scalars['Boolean']>,
  landing_type?: Maybe<Scalars['String']>,
  landing_vehicle?: Maybe<Scalars['String']>,
  legs?: Maybe<Scalars['Boolean']>,
  reused?: Maybe<Scalars['Boolean']>,
};

export type LaunchRocketSecondStage = {
   __typename?: 'LaunchRocketSecondStage',
  block?: Maybe<Scalars['Int']>,
  payloads?: Maybe<Array<Maybe<Payload>>>,
};

export type LaunchSite = {
   __typename?: 'LaunchSite',
  site_id?: Maybe<Scalars['String']>,
  site_name?: Maybe<Scalars['String']>,
  site_name_long?: Maybe<Scalars['String']>,
};

export type LaunchTelemetry = {
   __typename?: 'LaunchTelemetry',
  flight_club?: Maybe<Scalars['String']>,
};

export type Link = {
   __typename?: 'Link',
  article?: Maybe<Scalars['String']>,
  reddit?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type Location = {
   __typename?: 'Location',
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
};

export type Mass = {
   __typename?: 'Mass',
  kg?: Maybe<Scalars['Int']>,
  lb?: Maybe<Scalars['Int']>,
};

export type Mission = {
   __typename?: 'Mission',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Scalars['String']>,
  payloads?: Maybe<Array<Maybe<Payload>>>,
  twitter?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type MissionResult = {
   __typename?: 'MissionResult',
  data?: Maybe<Array<Maybe<Mission>>>,
  result?: Maybe<Result>,
};

export type MissionsFind = {
  id?: Maybe<Scalars['ID']>,
  manufacturer?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  payload_id?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>,
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>,
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>,
};


export type MutationDelete_UsersArgs = {
  where: Users_Bool_Exp
};


export type MutationInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>,
  on_conflict?: Maybe<Users_On_Conflict>
};


export type MutationUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>,
  where: Users_Bool_Exp
};


/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Payload = {
   __typename?: 'Payload',
  customers?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['ID']>,
  manufacturer?: Maybe<Scalars['String']>,
  nationality?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orbit?: Maybe<Scalars['String']>,
  orbit_params?: Maybe<PayloadOrbitParams>,
  payload_mass_kg?: Maybe<Scalars['Float']>,
  payload_mass_lbs?: Maybe<Scalars['Float']>,
  payload_type?: Maybe<Scalars['String']>,
  reused?: Maybe<Scalars['Boolean']>,
};

export type PayloadOrbitParams = {
   __typename?: 'PayloadOrbitParams',
  apoapsis_km?: Maybe<Scalars['Float']>,
  arg_of_pericenter?: Maybe<Scalars['Float']>,
  eccentricity?: Maybe<Scalars['Float']>,
  epoch?: Maybe<Scalars['Date']>,
  inclination_deg?: Maybe<Scalars['Float']>,
  lifespan_years?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  mean_anomaly?: Maybe<Scalars['Float']>,
  mean_motion?: Maybe<Scalars['Float']>,
  periapsis_km?: Maybe<Scalars['Float']>,
  period_min?: Maybe<Scalars['Float']>,
  raan?: Maybe<Scalars['Float']>,
  reference_system?: Maybe<Scalars['String']>,
  regime?: Maybe<Scalars['String']>,
  semi_major_axis_km?: Maybe<Scalars['Float']>,
};

export type PayloadsFind = {
  apoapsis_km?: Maybe<Scalars['Float']>,
  customer?: Maybe<Scalars['String']>,
  eccentricity?: Maybe<Scalars['Float']>,
  epoch?: Maybe<Scalars['Date']>,
  inclination_deg?: Maybe<Scalars['Float']>,
  lifespan_years?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Scalars['String']>,
  mean_motion?: Maybe<Scalars['Float']>,
  nationality?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Scalars['Int']>,
  orbit?: Maybe<Scalars['String']>,
  payload_id?: Maybe<Scalars['ID']>,
  payload_type?: Maybe<Scalars['String']>,
  periapsis_km?: Maybe<Scalars['Float']>,
  period_min?: Maybe<Scalars['Float']>,
  raan?: Maybe<Scalars['Float']>,
  reference_system?: Maybe<Scalars['String']>,
  regime?: Maybe<Scalars['String']>,
  reused?: Maybe<Scalars['Boolean']>,
  semi_major_axis_km?: Maybe<Scalars['Float']>,
};

export type Query = {
   __typename?: 'Query',
  capsule?: Maybe<Capsule>,
  capsules?: Maybe<Array<Maybe<Capsule>>>,
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>,
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>,
  company?: Maybe<Info>,
  core?: Maybe<Core>,
  cores?: Maybe<Array<Maybe<Core>>>,
  coresPast?: Maybe<Array<Maybe<Core>>>,
  coresUpcoming?: Maybe<Array<Maybe<Core>>>,
  dragon?: Maybe<Dragon>,
  dragons?: Maybe<Array<Maybe<Dragon>>>,
  histories?: Maybe<Array<Maybe<History>>>,
  historiesResult?: Maybe<HistoriesResult>,
  history?: Maybe<History>,
  landpad?: Maybe<Landpad>,
  landpads?: Maybe<Array<Maybe<Landpad>>>,
  launch?: Maybe<Launch>,
  launchLatest?: Maybe<Launch>,
  launchNext?: Maybe<Launch>,
  launches?: Maybe<Array<Maybe<Launch>>>,
  launchesPast?: Maybe<Array<Maybe<Launch>>>,
  launchesPastResult?: Maybe<LaunchesPastResult>,
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>,
  launchpad?: Maybe<Launchpad>,
  launchpads?: Maybe<Array<Maybe<Launchpad>>>,
  mission?: Maybe<Mission>,
  missions?: Maybe<Array<Maybe<Mission>>>,
  missionsResult?: Maybe<MissionResult>,
  payload?: Maybe<Payload>,
  payloads?: Maybe<Array<Maybe<Payload>>>,
  roadster?: Maybe<Roadster>,
  rocket?: Maybe<Rocket>,
  rockets?: Maybe<Array<Maybe<Rocket>>>,
  rocketsResult?: Maybe<RocketsResult>,
  ship?: Maybe<Ship>,
  ships?: Maybe<Array<Maybe<Ship>>>,
  shipsResult?: Maybe<ShipsResult>,
  /** fetch data from the table: "users" */
  users: Array<Users>,
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate,
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>,
};


export type QueryCapsuleArgs = {
  id: Scalars['ID']
};


export type QueryCapsulesArgs = {
  find?: Maybe<CapsulesFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCapsulesPastArgs = {
  find?: Maybe<CapsulesFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCapsulesUpcomingArgs = {
  find?: Maybe<CapsulesFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCoreArgs = {
  id: Scalars['ID']
};


export type QueryCoresArgs = {
  find?: Maybe<CoresFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCoresPastArgs = {
  find?: Maybe<CoresFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryCoresUpcomingArgs = {
  find?: Maybe<CoresFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryDragonArgs = {
  id: Scalars['ID']
};


export type QueryDragonsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryHistoriesArgs = {
  find?: Maybe<HistoryFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryHistoriesResultArgs = {
  find?: Maybe<HistoryFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryHistoryArgs = {
  id: Scalars['ID']
};


export type QueryLandpadArgs = {
  id: Scalars['ID']
};


export type QueryLandpadsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchArgs = {
  id: Scalars['ID']
};


export type QueryLaunchLatestArgs = {
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchNextArgs = {
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchesArgs = {
  find?: Maybe<LaunchFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryLaunchesPastArgs = {
  find?: Maybe<LaunchFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryLaunchesPastResultArgs = {
  find?: Maybe<LaunchFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryLaunchesUpcomingArgs = {
  find?: Maybe<LaunchFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryLaunchpadArgs = {
  id: Scalars['ID']
};


export type QueryLaunchpadsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryMissionArgs = {
  id: Scalars['ID']
};


export type QueryMissionsArgs = {
  find?: Maybe<MissionsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryMissionsResultArgs = {
  find?: Maybe<MissionsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryPayloadArgs = {
  id: Scalars['ID']
};


export type QueryPayloadsArgs = {
  find?: Maybe<PayloadsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryRocketArgs = {
  id: Scalars['ID']
};


export type QueryRocketsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryRocketsResultArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryShipArgs = {
  id: Scalars['ID']
};


export type QueryShipsArgs = {
  find?: Maybe<ShipsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryShipsResultArgs = {
  find?: Maybe<ShipsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


export type QueryUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


export type QueryUsers_By_PkArgs = {
  id: Scalars['uuid']
};

export type Result = {
   __typename?: 'Result',
  totalCount?: Maybe<Scalars['Int']>,
};

export type Roadster = {
   __typename?: 'Roadster',
  apoapsis_au?: Maybe<Scalars['Float']>,
  details?: Maybe<Scalars['String']>,
  earth_distance_km?: Maybe<Scalars['Float']>,
  earth_distance_mi?: Maybe<Scalars['Float']>,
  eccentricity?: Maybe<Scalars['Float']>,
  epoch_jd?: Maybe<Scalars['Float']>,
  inclination?: Maybe<Scalars['Float']>,
  launch_date_unix?: Maybe<Scalars['Date']>,
  launch_date_utc?: Maybe<Scalars['Date']>,
  launch_mass_kg?: Maybe<Scalars['Int']>,
  launch_mass_lbs?: Maybe<Scalars['Int']>,
  longitude?: Maybe<Scalars['Float']>,
  mars_distance_km?: Maybe<Scalars['Float']>,
  mars_distance_mi?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Scalars['Int']>,
  orbit_type?: Maybe<Scalars['Float']>,
  periapsis_arg?: Maybe<Scalars['Float']>,
  periapsis_au?: Maybe<Scalars['Float']>,
  period_days?: Maybe<Scalars['Float']>,
  semi_major_axis_au?: Maybe<Scalars['Float']>,
  speed_kph?: Maybe<Scalars['Float']>,
  speed_mph?: Maybe<Scalars['Float']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type Rocket = {
   __typename?: 'Rocket',
  active?: Maybe<Scalars['Boolean']>,
  boosters?: Maybe<Scalars['Int']>,
  company?: Maybe<Scalars['String']>,
  cost_per_launch?: Maybe<Scalars['Int']>,
  country?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  diameter?: Maybe<Distance>,
  engines?: Maybe<RocketEngines>,
  first_flight?: Maybe<Scalars['Date']>,
  first_stage?: Maybe<RocketFirstStage>,
  height?: Maybe<Distance>,
  id?: Maybe<Scalars['ID']>,
  landing_legs?: Maybe<RocketLandingLegs>,
  mass?: Maybe<Mass>,
  name?: Maybe<Scalars['String']>,
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>,
  second_stage?: Maybe<RocketSecondStage>,
  stages?: Maybe<Scalars['Int']>,
  success_rate_pct?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
};

export type RocketEngines = {
   __typename?: 'RocketEngines',
  engine_loss_max?: Maybe<Scalars['String']>,
  layout?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  propellant_1?: Maybe<Scalars['String']>,
  propellant_2?: Maybe<Scalars['String']>,
  thrust_sea_level?: Maybe<Force>,
  thrust_to_weight?: Maybe<Scalars['Float']>,
  thrust_vacuum?: Maybe<Force>,
  type?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type RocketFirstStage = {
   __typename?: 'RocketFirstStage',
  burn_time_sec?: Maybe<Scalars['Int']>,
  engines?: Maybe<Scalars['Int']>,
  fuel_amount_tons?: Maybe<Scalars['Float']>,
  reusable?: Maybe<Scalars['Boolean']>,
  thrust_sea_level?: Maybe<Force>,
  thrust_vacuum?: Maybe<Force>,
};

export type RocketLandingLegs = {
   __typename?: 'RocketLandingLegs',
  material?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
};

export type RocketPayloadWeight = {
   __typename?: 'RocketPayloadWeight',
  id?: Maybe<Scalars['String']>,
  kg?: Maybe<Scalars['Int']>,
  lb?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type RocketSecondStage = {
   __typename?: 'RocketSecondStage',
  burn_time_sec?: Maybe<Scalars['Int']>,
  engines?: Maybe<Scalars['Int']>,
  fuel_amount_tons?: Maybe<Scalars['Float']>,
  payloads?: Maybe<RocketSecondStagePayloads>,
  thrust?: Maybe<Force>,
};

export type RocketSecondStagePayloadCompositeFairing = {
   __typename?: 'RocketSecondStagePayloadCompositeFairing',
  diameter?: Maybe<Distance>,
  height?: Maybe<Distance>,
};

export type RocketSecondStagePayloads = {
   __typename?: 'RocketSecondStagePayloads',
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>,
  option_1?: Maybe<Scalars['String']>,
};

export type RocketsResult = {
   __typename?: 'RocketsResult',
  data?: Maybe<Array<Maybe<Rocket>>>,
  result?: Maybe<Result>,
};

export type Ship = {
   __typename?: 'Ship',
  abs?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  attempted_landings?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['Int']>,
  course_deg?: Maybe<Scalars['Int']>,
  home_port?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  image?: Maybe<Scalars['String']>,
  imo?: Maybe<Scalars['Int']>,
  missions?: Maybe<Array<Maybe<ShipMission>>>,
  mmsi?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  position?: Maybe<ShipLocation>,
  roles?: Maybe<Array<Maybe<Scalars['String']>>>,
  speed_kn?: Maybe<Scalars['Float']>,
  status?: Maybe<Scalars['String']>,
  successful_landings?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  weight_kg?: Maybe<Scalars['Int']>,
  weight_lbs?: Maybe<Scalars['Int']>,
  year_built?: Maybe<Scalars['Int']>,
};

export type ShipLocation = {
   __typename?: 'ShipLocation',
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type ShipMission = {
   __typename?: 'ShipMission',
  flight?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ShipsFind = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['Boolean']>,
  imo?: Maybe<Scalars['Int']>,
  mmsi?: Maybe<Scalars['Int']>,
  abs?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['Int']>,
  weight_lbs?: Maybe<Scalars['Int']>,
  weight_kg?: Maybe<Scalars['Int']>,
  year_built?: Maybe<Scalars['Int']>,
  home_port?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  speed_kn?: Maybe<Scalars['Int']>,
  course_deg?: Maybe<Scalars['Int']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  successful_landings?: Maybe<Scalars['Int']>,
  attempted_landings?: Maybe<Scalars['Int']>,
  mission?: Maybe<Scalars['String']>,
};

export type ShipsResult = {
   __typename?: 'ShipsResult',
  data?: Maybe<Array<Maybe<Ship>>>,
  result?: Maybe<Result>,
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  /** fetch data from the table: "users" */
  users: Array<Users>,
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate,
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>,
};


export type SubscriptionUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


export type SubscriptionUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Users_Order_By>>,
  where?: Maybe<Users_Bool_Exp>
};


export type SubscriptionUsers_By_PkArgs = {
  id: Scalars['uuid']
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

/** columns and relationships of "users" */
export type Users = {
   __typename?: 'users',
  id: Scalars['uuid'],
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp: Scalars['timestamptz'],
  twitter?: Maybe<Scalars['String']>,
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate',
  aggregate?: Maybe<Users_Aggregate_Fields>,
  nodes: Array<Users>,
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Users_Max_Fields>,
  min?: Maybe<Users_Min_Fields>,
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Users_Max_Order_By>,
  min?: Maybe<Users_Min_Order_By>,
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>,
  on_conflict?: Maybe<Users_On_Conflict>,
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  _not?: Maybe<Users_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  rocket?: Maybe<String_Comparison_Exp>,
  timestamp?: Maybe<Timestamptz_Comparison_Exp>,
  twitter?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  Unique = 'unique',
  Or = 'or',
  Primary = 'primary',
  Key = 'key',
  Constraint = 'constraint',
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  twitter?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Users_Max_Fields = {
   __typename?: 'users_max_fields',
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  twitter?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  name?: Maybe<Order_By>,
  rocket?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  twitter?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Users_Min_Fields = {
   __typename?: 'users_min_fields',
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  twitter?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  name?: Maybe<Order_By>,
  rocket?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  twitter?: Maybe<Order_By>,
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Users>,
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input,
  on_conflict?: Maybe<Users_On_Conflict>,
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint,
  update_columns: Array<Users_Update_Column>,
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  rocket?: Maybe<Order_By>,
  timestamp?: Maybe<Order_By>,
  twitter?: Maybe<Order_By>,
};

/** select columns of table "users" */
export enum Users_Select_Column {
  Column = 'column',
  Name = 'name',
  Id = 'id',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  rocket?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['timestamptz']>,
  twitter?: Maybe<Scalars['String']>,
};

/** update columns of table "users" */
export enum Users_Update_Column {
  Column = 'column',
  Name = 'name',
  Id = 'id',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type Volume = {
   __typename?: 'Volume',
  cubic_feet?: Maybe<Scalars['Int']>,
  cubic_meters?: Maybe<Scalars['Int']>,
};
export type LaunchDetailsQueryVariables = {
  id: Scalars['ID']
};


export type LaunchDetailsQuery = (
  { __typename?: 'Query' }
  & { launch: Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'id' | 'mission_name' | 'details'>
    & { links: Maybe<(
      { __typename?: 'LaunchLinks' }
      & Pick<LaunchLinks, 'flickr_images' | 'mission_patch'>
    )> }
  )> }
);

export type PastLaunchesListQueryVariables = {
  limit: Scalars['Int']
};


export type PastLaunchesListQuery = (
  { __typename?: 'Query' }
  & { launchesPast: Maybe<Array<Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'id' | 'mission_name' | 'launch_date_utc'>
    & { links: Maybe<(
      { __typename?: 'LaunchLinks' }
      & Pick<LaunchLinks, 'flickr_images' | 'mission_patch_small'>
    )>, rocket: Maybe<(
      { __typename?: 'LaunchRocket' }
      & Pick<LaunchRocket, 'rocket_name'>
    )> }
  )>>> }
);

export const LaunchDetailsDocument = gql`
    query launchDetails($id: ID!) {
  launch(id: $id) {
    id
    mission_name
    details
    links {
      flickr_images
      mission_patch
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LaunchDetailsGQL extends Apollo.Query<LaunchDetailsQuery, LaunchDetailsQueryVariables> {
    document = LaunchDetailsDocument;
    
  }
export const PastLaunchesListDocument = gql`
    query pastLaunchesList($limit: Int!) {
  launchesPast(limit: $limit) {
    id
    mission_name
    links {
      flickr_images
      mission_patch_small
    }
    rocket {
      rocket_name
    }
    launch_date_utc
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PastLaunchesListGQL extends Apollo.Query<PastLaunchesListQuery, PastLaunchesListQueryVariables> {
    document = PastLaunchesListDocument;
    
  }