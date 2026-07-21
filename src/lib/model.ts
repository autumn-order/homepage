export interface StatsEntryDto {
    members: number;
    date: string;
}

export interface CorporationStatsEntriesDto {
    corporation_id: number;
    entries: StatsEntryDto[];
}

export interface CorporationStatsDto {
    corporation_id: number;
    members: number;
    ships_destroyed: number;
}

export interface StatsDto {
    corporation_stats: CorporationStatsDto[];
    corporation_stats_entries: CorporationStatsEntriesDto[];
}

export interface StatsRequestDto {
    statsCorporationIds: number[];
    statsHistoryCorporationIds: number[];
}

export interface CorporationCardEntry {
    corporation_id: number;
    corporation_name: string;
    location: string;
    apply_text: string;
}

export interface FaqEntry {
    question: string;
    answer: string;
}

export interface RecruiterEntry {
    id: number;
    name: string;
    discord: string;
    title: string;
}
