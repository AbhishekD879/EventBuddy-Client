interface TEvent {
    id: string; // UUID
    createdAt: Date; // timestamptz
    updatedAt: Date; // timestamptz
    eventTitle: string; // text
    eventDescription: string; // text
    isActive: boolean; // bool
    eventLocation: string; // text
    goalAmount: number; // float8
    eventAdmin: string | null; // UUID, nullable
    contributes: string | null; // UUID, nullable
    contributeEqually: boolean | null; // bool, nullable
    eventCover: string; // text
    eventPhoto: object | null; // json, nullable
    currentContribution: number | null; // float8, nullable
    isGlobal: boolean; // bool
  }