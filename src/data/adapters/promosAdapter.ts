import type { RosterItem } from "../../components/roster/RosterGrid";

type SiteRosterItem = {
  id: string;
  name: string;
  nickname?: string;
  brand?: string;
  alignment?: string;
  photo?: string;
  portrait?: string;
  preview?: string;
  tile?: string;
};

export function adaptRosterItem(item: SiteRosterItem): RosterItem {
  return {
    id: item.id,
    name: item.name,
    nickname: item.nickname,
    brand: item.brand,
    alignment: item.alignment,
    image: item.portrait || item.photo || item.preview || item.tile,
  };
}

export function adaptRoster(items: SiteRosterItem[]): RosterItem[] {
  return items.map(adaptRosterItem);
}