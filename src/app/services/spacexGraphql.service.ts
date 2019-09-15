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
  id?: Maybe<Scalars['ID']>,
  landings?: Maybe<Scalars['Int']>,
  missions?: Maybe<Array<Maybe<CapsuleMission>>>,
  original_launch?: Maybe<Scalars['Date']>,
  reuse_count?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  dragon?: Maybe<Dragon>,
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
  name?: Maybe<Scalars['String']>,
  flight?: Maybe<Scalars['Int']>,
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
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<History>>>,
};

export type History = {
   __typename?: 'History',
  details?: Maybe<Scalars['String']>,
  event_date_unix?: Maybe<Scalars['Date']>,
  event_date_utc?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['ID']>,
  links?: Maybe<Link>,
  title?: Maybe<Scalars['String']>,
  flight?: Maybe<Launch>,
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
  cto_propulsion?: Maybe<Scalars['String']>,
  cto?: Maybe<Scalars['String']>,
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
  static_fire_date_unix?: Maybe<Scalars['Date']>,
  static_fire_date_utc?: Maybe<Scalars['Date']>,
  telemetry?: Maybe<LaunchTelemetry>,
  tentative_max_precision?: Maybe<Scalars['String']>,
  upcoming?: Maybe<Scalars['Boolean']>,
  ships?: Maybe<Array<Maybe<Ship>>>,
};

export type LaunchesPastResult = {
   __typename?: 'LaunchesPastResult',
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<Launch>>>,
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
  mission_patch_small?: Maybe<Scalars['String']>,
  mission_patch?: Maybe<Scalars['String']>,
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
  rocket_name?: Maybe<Scalars['String']>,
  rocket_type?: Maybe<Scalars['String']>,
  rocket?: Maybe<Rocket>,
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
  site_name_long?: Maybe<Scalars['String']>,
  site_name?: Maybe<Scalars['String']>,
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
  twitter?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
  payloads?: Maybe<Array<Maybe<Payload>>>,
};

export type MissionResult = {
   __typename?: 'MissionResult',
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<Mission>>>,
};

export type MissionsFind = {
  id?: Maybe<Scalars['ID']>,
  manufacturer?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  payload_id?: Maybe<Scalars['String']>,
};


export type Payload = {
   __typename?: 'Payload',
  customers?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['ID']>,
  manufacturer?: Maybe<Scalars['String']>,
  nationality?: Maybe<Scalars['String']>,
  norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orbit_params?: Maybe<PayloadOrbitParams>,
  orbit?: Maybe<Scalars['String']>,
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
  capsules?: Maybe<Array<Maybe<Capsule>>>,
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>,
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>,
  capsule?: Maybe<Capsule>,
  company?: Maybe<Info>,
  cores?: Maybe<Array<Maybe<Core>>>,
  coresPast?: Maybe<Array<Maybe<Core>>>,
  coresUpcoming?: Maybe<Array<Maybe<Core>>>,
  core?: Maybe<Core>,
  dragons?: Maybe<Array<Maybe<Dragon>>>,
  dragon?: Maybe<Dragon>,
  histories?: Maybe<Array<Maybe<History>>>,
  historiesResult?: Maybe<HistoriesResult>,
  history?: Maybe<History>,
  landpads?: Maybe<Array<Maybe<Landpad>>>,
  landpad?: Maybe<Landpad>,
  launches?: Maybe<Array<Maybe<Launch>>>,
  launchesPast?: Maybe<Array<Maybe<Launch>>>,
  launchesPastResult?: Maybe<LaunchesPastResult>,
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>,
  launch?: Maybe<Launch>,
  launchLatest?: Maybe<Launch>,
  launchNext?: Maybe<Launch>,
  launchpads?: Maybe<Array<Maybe<Launchpad>>>,
  launchpad?: Maybe<Launchpad>,
  missions?: Maybe<Array<Maybe<Mission>>>,
  missionsResult?: Maybe<MissionResult>,
  mission?: Maybe<Mission>,
  payloads?: Maybe<Array<Maybe<Payload>>>,
  payload?: Maybe<Payload>,
  roadster?: Maybe<Roadster>,
  rockets?: Maybe<Array<Maybe<Rocket>>>,
  rocketsResult?: Maybe<RocketsResult>,
  rocket?: Maybe<Rocket>,
  ships?: Maybe<Array<Maybe<Ship>>>,
  shipsResult?: Maybe<ShipsResult>,
  ship?: Maybe<Ship>,
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


export type QueryCapsuleArgs = {
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


export type QueryCoreArgs = {
  id: Scalars['ID']
};


export type QueryDragonsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryDragonArgs = {
  id: Scalars['ID']
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


export type QueryLandpadsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryLandpadArgs = {
  id: Scalars['ID']
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


export type QueryLaunchArgs = {
  id: Scalars['ID']
};


export type QueryLaunchLatestArgs = {
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchNextArgs = {
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchpadsArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryLaunchpadArgs = {
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


export type QueryMissionArgs = {
  id: Scalars['ID']
};


export type QueryPayloadsArgs = {
  find?: Maybe<PayloadsFind>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryPayloadArgs = {
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


export type QueryRocketArgs = {
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


export type QueryShipArgs = {
  id: Scalars['ID']
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
  number?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  layout?: Maybe<Scalars['String']>,
  engine_loss_max?: Maybe<Scalars['String']>,
  propellant_1?: Maybe<Scalars['String']>,
  propellant_2?: Maybe<Scalars['String']>,
  thrust_sea_level?: Maybe<Force>,
  thrust_vacuum?: Maybe<Force>,
  thrust_to_weight?: Maybe<Scalars['Float']>,
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
  number?: Maybe<Scalars['Int']>,
  material?: Maybe<Scalars['String']>,
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
  height?: Maybe<Distance>,
  diameter?: Maybe<Distance>,
};

export type RocketSecondStagePayloads = {
   __typename?: 'RocketSecondStagePayloads',
  option_1?: Maybe<Scalars['String']>,
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>,
};

export type RocketsResult = {
   __typename?: 'RocketsResult',
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<Rocket>>>,
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
  result?: Maybe<Result>,
  data?: Maybe<Array<Maybe<Ship>>>,
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