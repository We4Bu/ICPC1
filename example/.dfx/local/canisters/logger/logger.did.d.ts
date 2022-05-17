import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Stats {
  'bucket_sizes' : Array<bigint>,
  'start_index' : bigint,
}
export interface TextLogger {
  'allow' : ActorMethod<[Array<Principal>], undefined>,
  'append' : ActorMethod<[Array<string>], undefined>,
  'pop_buckets' : ActorMethod<[bigint], undefined>,
  'stats' : ActorMethod<[], Stats>,
  'view' : ActorMethod<[bigint, bigint], View>,
}
export interface View { 'messages' : Array<string>, 'start_index' : bigint }
export interface _SERVICE extends TextLogger {}
