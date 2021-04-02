export type Status = "loading" | "success" | "failed";

export type Process = {
  status: Status;
  error?: string;
};

export type Processes = Record<string, Process>;
