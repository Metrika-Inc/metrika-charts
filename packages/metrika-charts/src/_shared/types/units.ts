type BaseUnit = 'link' | 'boolean' | 'datetime' | 'integer' | 'number' | 'percent' | 'string';

type Algo_types = 'algo_microalgo' | 'algo_algo' | 'algo_address' | 'algo_voting_status';

export type Unit = BaseUnit | Algo_types;
