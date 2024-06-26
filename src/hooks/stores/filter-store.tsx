import { SearchType, TimeWindow } from "@/lib/types/filter";
import { create } from "zustand";

interface FilterStore {
  search: string;
  searchType: SearchType;
  timeWindow: TimeWindow;
  page: number;
  setSearch: (search: string) => void;
  setSearchType: (searchType: SearchType) => void;
  setTimeWindow: (timeWindow: TimeWindow) => void;
  setPage: (page: number) => void;
}

const useFilterStore = create<FilterStore>((set) => ({
  search: "",
  page: 1,
  searchType: "normal",
  timeWindow: "day",
  setSearch: (search) => set({ search }),
  setPage: (page) => set({ page }),
  setSearchType: (searchType) => set({ searchType }),
  setTimeWindow: (timeWindow) => set({ timeWindow }),
}));

export default useFilterStore;