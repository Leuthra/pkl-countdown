export interface CountdownData {
    pklStart: string;
    pklEnd: string;
  }
  
  export const getCountdownData = async (): Promise<CountdownData> => {
    return {
      pklStart: "2024-04-29T00:00:00Z",
      pklEnd: "2025-02-28T00:00:00Z",
    };
  };